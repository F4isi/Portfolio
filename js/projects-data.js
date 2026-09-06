/* ==========================================================================
   Projects & Case Studies Database
   Faisal Noushad — Unity Game Developer
   ========================================================================== */

const PROJECTS_DATA = [
  {
    id: "spider-solitaire",
    title: "Spider Solitaire",
    genre: "Card / Logic Puzzle",
    platform: "Unity WebGL (Browser)",
    isFeatured: true,
    category: ["featured", "2d", "card"],
    image: "assets/images/spider-solitaire.png",
    thumbnail: "assets/images/spider-solitaire-thumb.png",
    playUrl: "https://devfaisaln.itch.io/spider-solitaire",
    itchUrl: "https://devfaisaln.itch.io/spider-solitaire",
    githubUrl: "https://github.com/F4isi",
    tagline: "Classic digital card game with complete tableau state management and smooth card sequencing in WebGL.",
    overview: "A polished recreation of classic Spider Solitaire developed in Unity with C#, designed around responsive card interactions, clean tableau management, and seamless in-browser WebGL performance. Every move challenges players to build descending suit sequences while dynamically reorganizing the board.",
    role: "Solo Gameplay Programmer & Systems Designer",
    techStack: ["Unity 2D", "C#", "Unity UI", "DOTween", "WebGL", "Object Pooling"],
    keyFeatures: [
      "Dynamic tableau column management supporting multi-card stacked dragging",
      "Rigid sequence validation enforcing King-to-Ace descending rules",
      "Automatic complete-sequence detection and celebratory clearing animation",
      "Responsive card drag-and-drop mechanics with immediate visual feedback",
      "Cross-platform WebGL build optimized for zero-lag browser execution"
    ],
    technicalHighlights: [
      {
        title: "Card State Architecture",
        desc: "Implemented object-oriented card representations tracking suit, rank, facing state (hidden vs revealed), and column parentage."
      },
      {
        title: "Tableau & Column Managers",
        desc: "Built recursive column evaluators that validate whether selected card stacks can be legally moved onto target columns in accordance with standard rules."
      },
      {
        title: "Tweened Feedback",
        desc: "Integrated DOTween for silky card dealing, auto-snapping invalid moves back to original slots, and sequence removal animations."
      }
    ],
    challenge: "Handling complex multi-card drag operations where child cards must maintain their spatial hierarchy and offsets without breaking raycast targets or sorting layers.",
    solution: "Structured dynamic UI hierarchy reparenting during drag states, utilizing a temporary overlay canvas with dedicated sorting order before committing back to the validated destination column."
  },

  {
    id: "city-rider",
    title: "City Rider",
    genre: "3D Vehicle / Urban Driving",
    platform: "Unity WebGL (Browser)",
    isFeatured: true,
    category: ["featured", "3d", "physics"],
    image: "assets/images/city-rider.png",
    thumbnail: "assets/images/city-rider-thumb.png",
    playUrl: "https://devfaisaln.itch.io/city-rider",
    itchUrl: "https://devfaisaln.itch.io/city-rider",
    githubUrl: "https://github.com/F4isi",
    tagline: "Physics-driven 3D motorcycle simulator featuring custom wheel controllers and urban navigation.",
    overview: "City Rider is an interactive 3D motorcycle riding simulation built in Unity. It features realistic two-wheeled vehicle physics, responsive acceleration and braking curves, steering lean angles, and real-time collision interaction inside an urban city environment.",
    role: "Gameplay & Physics Programmer",
    techStack: ["Unity 3D", "C#", "Rigidbody Physics", "Wheel Colliders", "Input System", "WebGL"],
    keyFeatures: [
      "Custom two-wheel motorcycle controller with dynamic center of mass balancing",
      "Realistic leaning physics that tilt the bike mesh relative to speed and turn radius",
      "Dynamic camera tracking with damping and speed-responsive field of view",
      "Urban road network integration with physics-accurate collision boundaries",
      "Lightweight WebGL optimization maintaining high frame rates in desktop browsers"
    ],
    technicalHighlights: [
      {
        title: "Two-Wheeled Balance Simulation",
        desc: "Stabilized the motorcycle physics by calculating stabilizing torque and modulating friction curves on steer angles to prevent sudden rollovers."
      },
      {
        title: "Wheel Physics & Friction Tuning",
        desc: "Tuned longitudinal and lateral slip curves to deliver authentic drift, grip, and braking traction."
      },
      {
        title: "Responsive Input Pipeline",
        desc: "Mapped throttle, reverse, steer, and handbrake actions to smooth interpolation functions to prevent jittery turns."
      }
    ],
    challenge: "Simulating a stable 2-wheeled motorcycle using Unity's physics engine without tipping over uncontrollably at low speeds.",
    solution: "Engineered a dynamic torque upright-assist system that calculates tilt angles and applies counter-balancing gyroscopic forces that smoothly scale down as forward velocity increases."
  },

  {
    id: "chess",
    title: "Chess — Adaptive AI & Polished Mechanics",
    genre: "Turn-Based Strategy / AI",
    platform: "Unity WebGL (Browser)",
    isFeatured: true,
    category: ["featured", "2d", "ai"],
    image: "assets/images/chess.png",
    thumbnail: "assets/images/chess-thumb.png",
    playUrl: "https://devfaisaln.itch.io/chess",
    itchUrl: "https://devfaisaln.itch.io/chess",
    githubUrl: "https://github.com/F4isi",
    tagline: "Complete Chess system featuring 3-tier adaptive AI (Random, Heuristic, Minimax), turn timers, and DOTween animations.",
    overview: "A modern recreation of classic Chess created from scratch in Unity. The game features full move legality verification, piece capturing, check/checkmate detection, integrated timers, and a flexible AI opponent capable of varying difficulty styles from random moves to multi-ply Minimax evaluation.",
    role: "Gameplay Programmer & AI Architect",
    techStack: ["Unity 2D", "C#", "Minimax Algorithm", "DOTween", "Audio Manager", "WebGL"],
    keyFeatures: [
      "3 AI Difficulty Tiers: Random Explorer, Heuristic Material Hunter, and Minimax Evaluator",
      "Local 2-Player 'Pass & Play' and Player vs AI game modes",
      "Silky piece movement and capture feedback powered by DOTween animations",
      "Turn timer system with piece evaluation calculations when time expires",
      "Centralized Audio Manager triggering contextual soundscapes for moves, checks, and captures"
    ],
    technicalHighlights: [
      {
        title: "Move Generation & Validation",
        desc: "Built an 8x8 grid matrix validating orthogonal, diagonal, and L-shape vectors while checking for pinned pieces and King safety."
      },
      {
        title: "Minimax Decision Engine",
        desc: "Implemented a recursive minimax search tree scoring positional board states, piece weights, and piece mobility."
      },
      {
        title: "Decoupled Audio & UI Architecture",
        desc: "Utilized event-driven architecture to announce board actions without tightly coupling UI visuals to game rules."
      }
    ],
    challenge: "Preventing UI freezes during AI depth search evaluations on browser WebGL threads without native multi-threading.",
    solution: "Optimized state cloning and pruning during minimax tree evaluation, using integer-based bitboard representation to keep turn computations under 50 milliseconds."
  },

  {
    id: "asteroids",
    title: "Asteroids Arcade",
    genre: "2D Arcade / Physics Shooter",
    platform: "Unity WebGL (Browser)",
    isFeatured: true,
    category: ["featured", "2d", "physics"],
    image: "assets/images/asteroids-thumb.png",
    thumbnail: "assets/images/asteroids-thumb.png",
    playUrl: "https://devfaisaln.itch.io/asteroids",
    itchUrl: "https://devfaisaln.itch.io/asteroids",
    githubUrl: "https://github.com/F4isi",
    tagline: "Classic space-themed arcade shooter with Newtonian spaceship inertia and procedural asteroid fragmentation.",
    overview: "A homage to retro arcade shooters built in Unity. Players pilot a triangular spacecraft through deep space, evading obstacles, engaging wandering UFO saucers, and blasting asteroids that dynamically split into smaller, higher-velocity debris upon impact.",
    role: "Gameplay Programmer",
    techStack: ["Unity 2D", "C#", "2D Physics (Rigidbody2D)", "Screen Wrapping", "Object Pooling"],
    keyFeatures: [
      "Newtonian inertia physics: thrust acceleration, angular rotational damping, and zero-G drift",
      "Seamless toroidal screen wrapping keeping ships and asteroids within camera view",
      "Multi-stage asteroid destruction splitting large rocks into medium and small fragments",
      "UFO enemy saucer encounters with erratic movement and retaliatory shooting",
      "High score tracking and arcade audio effects"
    ],
    technicalHighlights: [
      {
        title: "Toroidal Screen Wrapping",
        desc: "Engineered view-boundary checks that teleport game objects seamlessly to the opposite coordinate when exceeding screen extents."
      },
      {
        title: "Fragmentation Hierarchy",
        desc: "Scripted a fragmentation pipeline spawning child asteroids with randomized angle offsets and higher impulse velocities."
      },
      {
        title: "Pooled Projectiles",
        desc: "Employed object pooling for laser shots and explosion particles to prevent GC hiccups."
      }
    ],
    challenge: "Handling continuous laser fire and multiple fragmentation explosions without triggering garbage collection stutters in WebGL.",
    solution: "Implemented an Object Pool pattern for bullets and particle bursts, reusing active instances rather than instantiating and destroying at runtime."
  },

  {
    id: "xox-ai",
    title: "AI-Based XOX (Tic-Tac-Toe)",
    genre: "Strategy / Minimax AI",
    platform: "Unity Play & WebGL",
    isFeatured: false,
    category: ["2d", "ai"],
    image: "assets/images/xox-thumb.png",
    thumbnail: "assets/images/xox-thumb.png",
    playUrl: "https://play.unity.com/en/games/0dcf76d8-d6ee-45e2-ac1d-1767ced6a09d/ai-based-xox-game",
    itchUrl: "https://devfaisaln.itch.io/ai-based-xox-game",
    githubUrl: "https://github.com/F4isi",
    tagline: "Single & 2-player strategic XOX with unbeatable Minimax AI move prediction and responsive UI.",
    overview: "An AI-powered single-player and two-player XOX game developed in Unity. Showcases foundational game theory concepts with optimal move prediction via Minimax, board state evaluation, sound effects, and Unity Profiler performance tuning.",
    role: "Solo Developer",
    techStack: ["Unity 2D", "C#", "Minimax AI", "Unity UI", "Unity Profiler"],
    keyFeatures: [
      "Unbeatable Minimax AI mode that explores the complete decision space",
      "Dynamic turn switching, win/draw evaluation algorithms",
      "Smooth UI animations, audio feedback, and clean game restart flow",
      "Shipped and playable both on Unity Play and Itch.io"
    ],
    technicalHighlights: [
      {
        title: "Minimax Tree Search",
        desc: "Calculates scores for every terminal state (+10 for AI win, -10 for player win, 0 for draw) to ensure mathematically optimal countermoves."
      }
    ],
    challenge: "Designing an instant-response AI move loop that feels natural to human players.",
    solution: "Added a slight artificial thinking delay (250-400ms) with interactive turn indicators so the AI's moves feel deliberate rather than instantaneous."
  },

  {
    id: "fps-survival",
    title: "FPS Survival Shooter",
    genre: "3D First-Person Combat",
    platform: "PC / Desktop Unity",
    isFeatured: false,
    category: ["3d", "ai", "physics"],
    image: "assets/images/fps-survival.jpg",
    thumbnail: "assets/images/fps-survival.jpg",
    playUrl: null,
    itchUrl: "https://devfaisaln.itch.io/",
    githubUrl: "https://github.com/F4isi",
    tagline: "High-intensity first-person shooter featuring weapon handling, raycast ballistics, and enemy patrol AI.",
    overview: "A core gameplay prototype highlighting essential FPS architecture in Unity. Features complete first-person character movement, ADS (Aim Down Sights), procedural weapon sway, raycast hit registration, weapon switching, and enemy patrol/chase state machine AI.",
    role: "Lead Gameplay Programmer",
    techStack: ["Unity 3D", "C#", "NavMesh AI", "Raycast Systems", "State Machine", "Object Pooling"],
    keyFeatures: [
      "Procedural weapon sway, camera recoil kicks, and muzzle flash visual effects",
      "Raycast shooting with precise surface impact decals and damage calculations",
      "State-machine enemy AI: Patrol waypoint routes, Line of Sight chase, and melee/ranged attack states",
      "Inventory system managing weapon switching, reserve ammo clips, and reload routines",
      "Object pooling for bullet trails, impact sparks, and audio clips"
    ],
    technicalHighlights: [
      {
        title: "NavMesh Patrol & Chase AI",
        desc: "Implemented behavior states that switch between waypoint patrolling and player tracking when visual line-of-sight checks succeed."
      },
      {
        title: "Recoil & Spread Curves",
        desc: "Simulated weapon recoil with procedural recovery springs and bloom dispersion during sustained automatic fire."
      }
    ],
    challenge: "Achieving punchy, satisfying weapon feel with tight feedback without code bloat in the player controller.",
    solution: "Separated weapon logic into ScriptableObject data containers (fire rate, recoil curve, damage) feeding a modular GunController."
  },

  {
    id: "crashy-cat",
    title: "Crashy Cat",
    genre: "Casual Arcade / Endless",
    platform: "Unity WebGL (Browser)",
    isFeatured: false,
    category: ["2d", "physics"],
    image: "assets/images/crashy-cat-thumb.png",
    thumbnail: "assets/images/crashy-cat-thumb.png",
    playUrl: "https://devfaisaln.itch.io/crashy-cat",
    itchUrl: "https://devfaisaln.itch.io/crashy-cat",
    githubUrl: "https://github.com/F4isi",
    tagline: "Fun and frantic casual arcade runner built with physics triggers and score scaling.",
    overview: "A vibrant casual arcade game developed for web browsers. Demonstrates tight obstacle avoidance mechanics, difficulty progression pacing, animated 2D sprites, and high score retention.",
    role: "Gameplay Programmer",
    techStack: ["Unity 2D", "C#", "2D Physics", "PlayerPrefs", "WebGL"],
    keyFeatures: [
      "Responsive one-touch / click control scheme",
      "Dynamic obstacle spawner with increasing frequency and speed curves",
      "Juicy visual feedback on near-misses and collisions",
      "Persistent local high-score saving via PlayerPrefs"
    ],
    technicalHighlights: [
      {
        title: "Difficulty Progression Curve",
        desc: "Mathematical curve scaling obstacle spawn intervals and scroll speed relative to elapsed survival time."
      }
    ],
    challenge: "Ensuring game feel remains fair as obstacle speed ramps up.",
    solution: "Fine-tuned collision hitboxes to be slightly forgiving ('coyote time' and reduced obstacle colliders) to reward close calls."
  }
];
