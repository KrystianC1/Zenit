// Zenit workout programs — exercises library, program templates, key resolver

const EXERCISES = {
  chest_press: {
    name: 'Chest Press Machine',
    sets: 3, reps: 12, muscle: 'Chest', icon: '🏋️',
    how: [
      'Adjust the seat so handles are at chest height.',
      'Sit upright, back flat against the pad, feet on the floor.',
      'Push forward until arms are almost straight — do not lock elbows.',
      'Slowly bring handles back to the start. That is one rep.'
    ],
    swaps: [
      { icon: '🤲', name: 'Push-ups', meta: 'No equipment — same chest muscles' },
      { icon: '🏋️', name: 'Dumbbell Bench Press', meta: 'Flat bench + dumbbells' }
    ]
  },
  lat_pulldown: {
    name: 'Lat Pulldown',
    sets: 3, reps: 10, muscle: 'Back', icon: '💪',
    how: [
      'Sit and adjust the knee pad to lock your legs in.',
      'Grip the bar slightly wider than shoulder width, palms facing away.',
      'Pull the bar down to your upper chest, squeezing shoulder blades together.',
      'Slowly let the bar rise back up with control.'
    ],
    swaps: [
      { icon: '🔄', name: 'Assisted Pull-up Machine', meta: 'Same movement, assisted' },
      { icon: '🏋️', name: 'Dumbbell Row', meta: 'One dumbbell, one knee on bench' }
    ]
  },
  shoulder_press: {
    name: 'Shoulder Press Machine',
    sets: 3, reps: 12, muscle: 'Shoulders', icon: '⬆️',
    how: [
      'Adjust the seat so handles start at shoulder height.',
      'Sit tall with your back flat against the pad.',
      'Press upward until arms are nearly straight — no locking.',
      'Lower slowly back to shoulder height.'
    ],
    swaps: [
      { icon: '🏋️', name: 'Dumbbell Shoulder Press', meta: 'Seated or standing' },
      { icon: '💪', name: 'Arnold Press', meta: 'Dumbbells with rotation' }
    ]
  },
  seated_row: {
    name: 'Seated Cable Row',
    sets: 3, reps: 10, muscle: 'Back', icon: '🔁',
    how: [
      'Sit with feet on the platform, knees slightly bent.',
      'Grab the handle and sit up straight, back upright.',
      'Pull toward your lower chest, driving elbows back.',
      'Slowly extend arms back out. Do not round your back.'
    ],
    swaps: [
      { icon: '🏋️', name: 'Dumbbell Bent-Over Row', meta: 'Stand and row two dumbbells' },
      { icon: '🔄', name: 'Resistance Band Row', meta: 'Band anchored at a door' }
    ]
  },
  leg_press: {
    name: 'Leg Press',
    sets: 3, reps: 12, muscle: 'Legs', icon: '🦵',
    how: [
      'Sit in the machine with back flat against the pad.',
      'Place feet shoulder-width on the platform.',
      'Lower the weight until knees bend to about 90 degrees.',
      'Press through your heels to extend legs — do not lock knees.'
    ],
    swaps: [
      { icon: '🏋️', name: 'Goblet Squat', meta: 'Dumbbell held at chest' },
      { icon: '🪑', name: 'Bodyweight Squat', meta: 'No equipment needed' }
    ]
  },
  leg_curl: {
    name: 'Leg Curl Machine',
    sets: 3, reps: 12, muscle: 'Hamstrings', icon: '🦵',
    how: [
      'Lie face down and position the pad just above your heels.',
      'Grip the handles and keep hips pressed into the bench.',
      'Curl your heels toward your glutes, squeezing hamstrings.',
      'Lower slowly back to the start.'
    ],
    swaps: [
      { icon: '🔄', name: 'Resistance Band Curl', meta: 'Anchor band low, curl heel back' }
    ]
  },
  plank: {
    name: 'Plank',
    sets: 3, reps: 30, muscle: 'Core', icon: '🧘',
    how: [
      'Start on forearms and toes, elbows under shoulders.',
      'Keep your body in a straight line from head to heels.',
      'Brace your core and squeeze glutes.',
      'Hold for 30 seconds without letting hips sag.'
    ],
    swaps: [
      { icon: '🪑', name: 'Dead Bug', meta: 'Easier core alternative on the floor' }
    ]
  },
  goblet_squat: {
    name: 'Goblet Squat',
    sets: 3, reps: 12, muscle: 'Legs', icon: '🏋️',
    how: [
      'Hold one dumbbell vertically at chest height.',
      'Stand with feet slightly wider than shoulder width.',
      'Squat down until elbows touch knees, chest tall.',
      'Drive through heels to stand back up.'
    ],
    swaps: [
      { icon: '🪑', name: 'Bodyweight Squat', meta: 'Hands crossed on chest' }
    ]
  },
  romanian_deadlift: {
    name: 'Romanian Deadlift',
    sets: 3, reps: 10, muscle: 'Hamstrings', icon: '🏋️',
    how: [
      'Hold dumbbells in front of thighs, feet hip-width.',
      'Push hips back and lower weights along your legs.',
      'Stop when you feel a stretch in hamstrings — back stays flat.',
      'Drive hips forward to return to standing.'
    ],
    swaps: [
      { icon: '🔄', name: 'Good Morning', meta: 'Bodyweight hip hinge' }
    ]
  },
  push_ups: {
    name: 'Push-ups',
    sets: 3, reps: 12, muscle: 'Chest', icon: '🤲',
    how: [
      'Hands slightly wider than shoulders, body in a straight line.',
      'Lower chest toward the floor, elbows at about 45 degrees.',
      'Press back up until arms are straight.',
      'Keep core tight throughout.'
    ],
    swaps: [
      { icon: '🪑', name: 'Incline Push-ups', meta: 'Hands on bench — easier option' }
    ]
  },
  dumbbell_row: {
    name: 'Dumbbell Row',
    sets: 3, reps: 10, muscle: 'Back', icon: '🏋️',
    how: [
      'One hand and knee on a bench, other foot on floor.',
      'Hold dumbbell in free hand, arm hanging straight.',
      'Pull elbow up and back toward hip, squeezing shoulder blade.',
      'Lower with control.'
    ],
    swaps: [
      { icon: '🔄', name: 'Resistance Band Row', meta: 'Same pulling motion' }
    ]
  },
  walking_lunge: {
    name: 'Walking Lunges',
    sets: 3, reps: 10, muscle: 'Legs', icon: '🚶',
    how: [
      'Stand tall, step forward into a lunge — both knees near 90 degrees.',
      'Back knee hovers just above the floor.',
      'Push through front heel to step forward into the next lunge.',
      'Alternate legs for 10 reps per leg.'
    ],
    swaps: [
      { icon: '🪑', name: 'Static Lunge', meta: 'Stay in place, easier balance' }
    ]
  },
  bike_sprint: {
    name: 'Stationary Bike Intervals',
    sets: 5, reps: 1, muscle: 'Cardio', icon: '🚴',
    how: [
      'Adjust seat height so knee is slightly bent at bottom of pedal stroke.',
      'Warm up at easy pace for 2 minutes.',
      'Sprint hard for 30 seconds, then recover easy for 60 seconds.',
      'Repeat for 5 rounds, then cool down 2 minutes.'
    ],
    swaps: [
      { icon: '🏃', name: 'Treadmill Intervals', meta: 'Walk/jog intervals instead' }
    ]
  },
  treadmill_incline: {
    name: 'Incline Treadmill Walk',
    sets: 1, reps: 1, muscle: 'Cardio', icon: '🏃',
    how: [
      'Set incline to 8–12% and speed to a brisk walk.',
      'Stand tall, do not hold handrails unless needed for balance.',
      'Walk for 20–30 minutes at a pace you can sustain.',
      'Cool down 3 minutes flat at easy pace.'
    ],
    swaps: [
      { icon: '🚶', name: 'Outdoor Hill Walk', meta: 'Find a hill near you' }
    ]
  }
};

function getProgramKey(goal, equipment, days) {
  const g = goal || 'fit';
  const e = equipment || 'full';
  const d = String(days || '3');
  const key = `${g}_${e}_${d}`;
  if (PROGRAMS[key]) return key;
  const fallback = `${g}_${e}_3`;
  if (PROGRAMS[fallback]) return fallback;
  if (PROGRAMS[`${g}_full_3`]) return `${g}_full_3`;
  return 'fit_full_3';
}

function week1FullGym() {
  return {
    workoutDays: [1, 2, 3, 5],
    schedule: [
      { day: 1, label: 'MON', name: 'Full Body — Foundation', focus: 'Full Body', title: 'Foundation',
        exerciseIds: ['leg_press', 'chest_press', 'lat_pulldown', 'plank'], estMinutes: 45 },
      { day: 2, label: 'TUE', name: 'Lower Body — Legs & Core', focus: 'Lower Body', title: 'Legs & Core',
        exerciseIds: ['leg_press', 'leg_curl', 'goblet_squat', 'plank'], estMinutes: 45 },
      { day: 3, label: 'WED', name: 'Upper Body — Push & Pull', focus: 'Upper Body', title: 'Push & Pull',
        exerciseIds: ['chest_press', 'lat_pulldown', 'shoulder_press', 'seated_row'], estMinutes: 45 },
      { day: null, label: 'THU', rest: true, name: 'Rest day' },
      { day: 5, label: 'FRI', name: 'Full Body — Strength', focus: 'Full Body', title: 'Strength',
        exerciseIds: ['goblet_squat', 'chest_press', 'seated_row', 'shoulder_press'], estMinutes: 50 },
      { day: null, label: 'SAT', rest: true, name: 'Rest day' },
      { day: null, label: 'SUN', rest: true, name: 'Rest day' }
    ],
    days: {
      1: { day: 1, label: 'MON', name: 'Full Body — Foundation', focus: 'Full Body', title: 'Foundation',
        exerciseIds: ['leg_press', 'chest_press', 'lat_pulldown', 'plank'], estMinutes: 45 },
      2: { day: 2, label: 'TUE', name: 'Lower Body — Legs & Core', focus: 'Lower Body', title: 'Legs & Core',
        exerciseIds: ['leg_press', 'leg_curl', 'goblet_squat', 'plank'], estMinutes: 45 },
      3: { day: 3, label: 'WED', name: 'Upper Body — Push & Pull', focus: 'Upper Body', title: 'Push & Pull',
        exerciseIds: ['chest_press', 'lat_pulldown', 'shoulder_press', 'seated_row'], estMinutes: 45 },
      5: { day: 5, label: 'FRI', name: 'Full Body — Strength', focus: 'Full Body', title: 'Strength',
        exerciseIds: ['goblet_squat', 'chest_press', 'seated_row', 'shoulder_press'], estMinutes: 50 }
    }
  };
}

function weekHome3Day() {
  return {
    workoutDays: [1, 2, 3],
    schedule: [
      { day: 1, label: 'MON', name: 'Full Body — Start', focus: 'Full Body', title: 'Start',
        exerciseIds: ['goblet_squat', 'push_ups', 'dumbbell_row', 'plank'], estMinutes: 35 },
      { day: 2, label: 'WED', name: 'Lower & Core', focus: 'Lower Body', title: 'Lower & Core',
        exerciseIds: ['walking_lunge', 'romanian_deadlift', 'plank'], estMinutes: 35 },
      { day: 3, label: 'FRI', name: 'Upper & Push', focus: 'Upper Body', title: 'Upper & Push',
        exerciseIds: ['push_ups', 'dumbbell_row', 'shoulder_press'], estMinutes: 35 },
      { day: null, label: 'TUE', rest: true, name: 'Rest day' },
      { day: null, label: 'THU', rest: true, name: 'Rest day' },
      { day: null, label: 'SAT', rest: true, name: 'Rest day' },
      { day: null, label: 'SUN', rest: true, name: 'Rest day' }
    ],
    days: {
      1: { day: 1, label: 'MON', name: 'Full Body — Start', focus: 'Full Body', title: 'Start',
        exerciseIds: ['goblet_squat', 'push_ups', 'dumbbell_row', 'plank'], estMinutes: 35 },
      2: { day: 2, label: 'WED', name: 'Lower & Core', focus: 'Lower Body', title: 'Lower & Core',
        exerciseIds: ['walking_lunge', 'romanian_deadlift', 'plank'], estMinutes: 35 },
      3: { day: 3, label: 'FRI', name: 'Upper & Push', focus: 'Upper Body', title: 'Upper & Push',
        exerciseIds: ['push_ups', 'dumbbell_row', 'shoulder_press'], estMinutes: 35 }
    }
  };
}

function weekLoseCardio() {
  return {
    workoutDays: [1, 2, 3, 4, 5],
    schedule: [
      { day: 1, label: 'MON', name: 'Cardio + Core', focus: 'Cardio', title: 'Cardio & Core',
        exerciseIds: ['bike_sprint', 'plank'], estMinutes: 30 },
      { day: 2, label: 'TUE', name: 'Incline Walk', focus: 'Cardio', title: 'Incline Walk',
        exerciseIds: ['treadmill_incline'], estMinutes: 30 },
      { day: 3, label: 'WED', name: 'Full Body Circuit', focus: 'Full Body', title: 'Circuit',
        exerciseIds: ['goblet_squat', 'push_ups', 'plank'], estMinutes: 35 },
      { day: 4, label: 'THU', name: 'Cardio Intervals', focus: 'Cardio', title: 'Intervals',
        exerciseIds: ['bike_sprint'], estMinutes: 25 },
      { day: 5, label: 'FRI', name: 'Strength + Cardio', focus: 'Full Body', title: 'Strength',
        exerciseIds: ['leg_press', 'chest_press', 'plank'], estMinutes: 40 },
      { day: null, label: 'SAT', rest: true, name: 'Rest day' },
      { day: null, label: 'SUN', rest: true, name: 'Rest day' }
    ],
    days: {
      1: { day: 1, label: 'MON', name: 'Cardio + Core', focus: 'Cardio', title: 'Cardio & Core',
        exerciseIds: ['bike_sprint', 'plank'], estMinutes: 30 },
      2: { day: 2, label: 'TUE', name: 'Incline Walk', focus: 'Cardio', title: 'Incline Walk',
        exerciseIds: ['treadmill_incline'], estMinutes: 30 },
      3: { day: 3, label: 'WED', name: 'Full Body Circuit', focus: 'Full Body', title: 'Circuit',
        exerciseIds: ['goblet_squat', 'push_ups', 'plank'], estMinutes: 35 },
      4: { day: 4, label: 'THU', name: 'Cardio Intervals', focus: 'Cardio', title: 'Intervals',
        exerciseIds: ['bike_sprint'], estMinutes: 25 },
      5: { day: 5, label: 'FRI', name: 'Strength + Cardio', focus: 'Full Body', title: 'Strength',
        exerciseIds: ['leg_press', 'chest_press', 'plank'], estMinutes: 40 }
    }
  };
}

const PROGRAMS = {
  muscle_full_3: { label: 'Build Muscle · Full Gym · 3 days', equipmentLabel: 'Machines & free weights',
    weeks: { 1: week1FullGym() } },
  muscle_full_4: { label: 'Build Muscle · Full Gym · 4 days', equipmentLabel: 'Machines & free weights',
    weeks: { 1: week1FullGym() } },
  muscle_full_5: { label: 'Build Muscle · Full Gym · 5 days', equipmentLabel: 'Machines & free weights',
    weeks: { 1: week1FullGym() } },
  muscle_basic_3: { label: 'Build Muscle · Basic Gym · 3 days', equipmentLabel: 'Basic machines',
    weeks: { 1: week1FullGym() } },
  fit_full_3: { label: 'Get Fit · Full Gym · 3 days', equipmentLabel: 'Machines & free weights',
    weeks: { 1: week1FullGym() } },
  fit_full_4: { label: 'Get Fit · Full Gym · 4 days', equipmentLabel: 'Machines & free weights',
    weeks: { 1: week1FullGym() } },
  fit_full_5: { label: 'Get Fit · Full Gym · 5 days', equipmentLabel: 'Machines & free weights',
    weeks: { 1: week1FullGym() } },
  fit_basic_3: { label: 'Get Fit · Basic Gym · 3 days', equipmentLabel: 'Basic machines',
    weeks: { 1: week1FullGym() } },
  lose_full_3: { label: 'Lose Weight · Full Gym · 3 days', equipmentLabel: 'Cardio & strength',
    weeks: { 1: weekLoseCardio() } },
  lose_full_4: { label: 'Lose Weight · Full Gym · 4 days', equipmentLabel: 'Cardio & strength',
    weeks: { 1: weekLoseCardio() } },
  lose_full_5: { label: 'Lose Weight · Full Gym · 5 days', equipmentLabel: 'Cardio & strength',
    weeks: { 1: weekLoseCardio() } },
  muscle_home_2: { label: 'Build Muscle · Home · 2 days', equipmentLabel: 'Minimal equipment',
    weeks: { 1: weekHome3Day() } },
  muscle_home_3: { label: 'Build Muscle · Home · 3 days', equipmentLabel: 'Minimal equipment',
    weeks: { 1: weekHome3Day() } },
  fit_home_3: { label: 'Get Fit · Home · 3 days', equipmentLabel: 'Minimal equipment',
    weeks: { 1: weekHome3Day() } },
  lose_home_3: { label: 'Lose Weight · Home · 3 days', equipmentLabel: 'Minimal equipment',
    weeks: { 1: weekHome3Day() } }
};
