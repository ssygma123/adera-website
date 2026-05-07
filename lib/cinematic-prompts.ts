export interface CinematicPrompt {
  id: string;
  title: string;
  scene: string;
  prompt: string;
}

export const cinematicPrompts: CinematicPrompt[] = [
  {
    id: "rainy-tokyo",
    title: "Rainy Tokyo Street",
    scene: "Neon-soaked Shibuya at midnight",
    prompt:
      "Recreate the person in the attached selfie standing on a rain-slick Tokyo street at midnight, wearing a long charcoal trench coat with the collar turned up. Reflective wet pavement, neon kanji signs in red and electric blue, soft mist rising from manhole covers. Shot on a 50mm lens at f/1.4, shallow depth of field, anamorphic lens flares. Cinematic teal-and-orange color grade, 35mm film grain. Photorealistic, magazine cover quality. Keep the person's face and likeness exact."
  },
  {
    id: "cyberpunk-alley",
    title: "Cyberpunk Neon Alley",
    scene: "Rooftop above a dystopian megacity",
    prompt:
      "Place the person from the attached selfie on a rain-drenched neo-Tokyo rooftop overlooking a sprawling cyberpunk megacity. Holographic billboards in pink and cyan light their face from below, flying drones streak through the background, a katana-styled umbrella casts dramatic shadow. Wide 24mm lens, low angle, deep focus. Heavy atmospheric haze, volumetric light beams, Blade Runner 2049 color palette. Photorealistic, ultra-detailed. Keep the person's face and likeness exact."
  },
  {
    id: "desert-highway",
    title: "Desert Highway at Golden Hour",
    scene: "Endless route through Monument Valley",
    prompt:
      "Show the person in the attached selfie leaning against a vintage cherry-red 1969 Chevy Camaro on an empty desert highway at golden hour. Towering red-rock mesas in the background, heat haze blurring the horizon line, dust drifting across cracked asphalt. Aviator sunglasses, denim, leather jacket draped over one shoulder. Shot on a 35mm lens, lens flare from the low sun, warm amber tones, slight desaturation. Cinematic Western road-movie vibe. Photorealistic. Keep the person's face and likeness exact."
  },
  {
    id: "noir-detective",
    title: "Old Hollywood Black & White",
    scene: "1940s noir detective portrait",
    prompt:
      "Render the person in the attached selfie as a 1940s film-noir detective in a smoky office, dressed in a fedora, double-breasted suit, and loosened tie. Single-source venetian-blind shadow striping their face, smoldering cigarette, glass of whisky on a wooden desk. High-contrast black and white, hard key light, deep blacks. Shot on a 50mm lens, classic Hollywood portrait composition. Inspired by Roger Deakins lighting. Photorealistic, vintage film grain. Keep the person's face and likeness exact."
  },
  {
    id: "snowy-peak",
    title: "Snowy Mountain Summit",
    scene: "Heroic alpine expedition",
    prompt:
      "Place the person from the attached selfie on a windswept snow-covered alpine summit at sunrise, wearing a high-end red expedition parka with frosted goggles pushed up on their forehead. Jagged peaks pierce a sea of clouds below them, golden alpenglow on the snow, breath visible in the cold air. Wide 35mm lens, low heroic angle, sharp detail in the ice crystals. Crisp blue-and-amber grade, National Geographic feel. Photorealistic, ultra-detailed. Keep the person's face and likeness exact."
  },
  {
    id: "parisian-cafe",
    title: "Parisian Cafe at Twilight",
    scene: "Romantic Left Bank evening",
    prompt:
      "Show the person from the attached selfie seated at a wicker chair outside a Parisian cafe on a cobblestone Left Bank street at twilight. Warm bistro lights, espresso cup on a tiny round marble table, pages of a leather notebook fluttering. Soft Eiffel Tower silhouette glittering in the deep-blue background. Tailored wool coat, silk scarf. 85mm portrait lens, shallow depth of field, warm tungsten highlights against cool blue dusk. Editorial Vogue aesthetic. Photorealistic. Keep the person's face and likeness exact."
  },
  {
    id: "spaceship-bridge",
    title: "Sci-Fi Spaceship Bridge",
    scene: "Captain on a deep-space vessel",
    prompt:
      "Render the person in the attached selfie as the captain of a sleek deep-space starship, standing on the bridge in a futuristic charcoal uniform with subtle silver trim. Massive curved viewport behind them showing a swirling nebula in violet and gold, holographic readouts floating in the air. Cool teal practical lighting, rim-lit silhouette, high-tech bokeh. Shot on a 40mm anamorphic lens, slight low angle, cinematic widescreen framing. Inspired by Denis Villeneuve sci-fi. Photorealistic. Keep the person's face and likeness exact."
  },
  {
    id: "wild-west",
    title: "Wild West Saloon Doorway",
    scene: "Dusty frontier showdown",
    prompt:
      "Place the person from the attached selfie in the doorway of a weathered Wild West saloon at high noon, silhouetted against bright dusty light. Long duster coat, leather gun belt, wide-brim hat shadowing their eyes. Sun-bleached wooden boards, swinging saloon doors, tumbleweed mid-frame. Shot on a 50mm lens, deep contrast between sun-blasted exterior and dim interior, rich sepia-and-amber grade with film grain. Sergio Leone composition. Photorealistic. Keep the person's face and likeness exact."
  },
  {
    id: "stormy-lighthouse",
    title: "Stormy Lighthouse Coast",
    scene: "Atlantic gale at dusk",
    prompt:
      "Show the person from the attached selfie standing on jagged black cliffs in front of a tall white lighthouse during a violent Atlantic storm at dusk. Crashing waves explode behind them in white spray, wind whips a long wool coat sideways, lighthouse beam cuts through grey sky. Shot on a wide 28mm lens, low angle, dramatic clouds. Desaturated stormy palette, slate blues and steel greys, slight blue shift. Photorealistic, ultra-detailed. Keep the person's face and likeness exact."
  },
  {
    id: "italian-riviera",
    title: "Italian Vespa Riviera",
    scene: "Sun-drenched Amalfi Coast cruise",
    prompt:
      "Render the person from the attached selfie cruising along a winding Amalfi Coast road on a vintage mint-green Vespa, turquoise Mediterranean glittering far below. Linen shirt, tortoiseshell sunglasses, wind in their hair. Lemon trees and pastel cliffside villages flank the road. Shot on a 35mm lens, slight motion blur on the road, warm golden Italian summer light, rich saturation. Editorial travel magazine aesthetic. Photorealistic. Keep the person's face and likeness exact."
  },
  {
    id: "gothic-cathedral",
    title: "Brooding Gothic Cathedral",
    scene: "Candlelit medieval interior",
    prompt:
      "Place the person from the attached selfie inside a vast gothic cathedral at dusk, lit only by hundreds of candles and shafts of stained-glass light. Long dark velvet coat with subtle baroque embroidery. Massive stone arches receding into shadow, drifting incense smoke catching the light. 35mm lens, deep focus, painterly chiaroscuro lighting in the style of Caravaggio. Rich crimson, gold, and deep-shadow palette. Photorealistic, ultra-detailed. Keep the person's face and likeness exact."
  },
  {
    id: "jungle-adventure",
    title: "Tropical Jungle Adventure",
    scene: "Lost-temple explorer",
    prompt:
      "Show the person from the attached selfie as an explorer pushing through dense tropical jungle in front of a half-buried ancient stone temple covered in vines. Khaki shirt rolled at the sleeves, leather satchel, tan fedora. Shafts of golden sunlight pierce the canopy, mist hanging between trees, butterflies in mid-flight. Shot on a 35mm lens, deep saturated greens, cinematic Indiana-Jones grade. Photorealistic, magazine quality. Keep the person's face and likeness exact."
  },
  {
    id: "misty-forest",
    title: "Misty Forest Trail",
    scene: "Epic-fantasy ranger",
    prompt:
      "Render the person from the attached selfie walking a fog-covered forest trail at dawn, wearing a hooded dark-green wool cloak over leather armor. Massive moss-covered trees, beams of golden light slicing through morning mist, a longbow across their back. Shot on a 50mm lens, shallow depth of field, slight motion in the cloak. Cool greens and warm amber backlight, painterly Tolkien-inspired grade. Photorealistic, cinematic. Keep the person's face and likeness exact."
  },
  {
    id: "foggy-london",
    title: "Foggy London Bridge",
    scene: "Victorian-era detective",
    prompt:
      "Place the person from the attached selfie on a fog-drenched London bridge at night in the late 1800s, wearing a long charcoal greatcoat and holding a brass-tipped walking cane. Gas lamps glow weakly through dense yellow fog, the silhouette of Big Ben barely visible behind. Cobblestones gleam wet underfoot. Shot on a 50mm lens, shallow depth of field, period-accurate styling. Muted sepia and slate tones with warm gas-lamp pools. Sherlock Holmes aesthetic. Photorealistic. Keep the person's face and likeness exact."
  },
  {
    id: "beach-sunset",
    title: "Beachside Sunset Long Lens",
    scene: "Editorial fashion silhouette",
    prompt:
      "Show the person from the attached selfie walking barefoot along a wide, deserted beach at golden-hour sunset, the sun an enormous burnt-orange disc on the horizon directly behind them. Flowing linen outfit catching the breeze, soft footprints in the wet sand reflecting the sky. Shot on a 200mm telephoto lens, heavily compressed background, lens flare blooming around the silhouette. Warm amber and rose color grade, dreamy haze. Editorial fashion campaign feel. Photorealistic. Keep the person's face and likeness exact."
  }
];
