import crypto from "crypto";

function getSecret(): string {
  const secret =
    process.env.DOWNLOAD_TOKEN_SECRET || process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    throw new Error(
      "DOWNLOAD_TOKEN_SECRET (or STRIPE_SECRET_KEY as fallback) must be set"
    );
  }
  return secret;
}

const DEFAULT_TTL_SECONDS = 60 * 60 * 24 * 30;

export function signDownloadToken(
  productId: string,
  ttlSeconds: number = DEFAULT_TTL_SECONDS
): string {
  const expiry = Math.floor(Date.now() / 1000) + ttlSeconds;
  const nonce = crypto.randomBytes(8).toString("hex");
  const payload = `${productId}.${expiry}.${nonce}`;
  const sig = crypto
    .createHmac("sha256", getSecret())
    .update(payload)
    .digest("base64url");
  const payloadB64 = Buffer.from(payload).toString("base64url");
  return `${payloadB64}.${sig}`;
}

export function verifyDownloadToken(
  token: string | undefined,
  expectedProductId: string
): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [payloadB64, sig] = parts;

  let payload: string;
  try {
    payload = Buffer.from(payloadB64, "base64url").toString("utf8");
  } catch {
    return false;
  }

  const fields = payload.split(".");
  if (fields.length !== 3) return false;
  const [productId, expiryStr] = fields;
  if (productId !== expectedProductId) return false;

  const expiry = parseInt(expiryStr, 10);
  if (!Number.isFinite(expiry) || Date.now() / 1000 > expiry) return false;

  const expectedSig = crypto
    .createHmac("sha256", getSecret())
    .update(payload)
    .digest("base64url");

  const sigBuf = Buffer.from(sig);
  const expectedSigBuf = Buffer.from(expectedSig);
  if (sigBuf.length !== expectedSigBuf.length) return false;
  return crypto.timingSafeEqual(sigBuf, expectedSigBuf);
}
