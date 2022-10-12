export enum Level {
  Low,
  Medium,
  High,
  Critical,
}

// Make sure this is kept up to date with LEVEL
export enum LevelText {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
  Critical = 'Critical',
}

export const levelsMap: Record<Level, LevelText> = {
  [Level.Low]: LevelText.Low,
  [Level.Medium]: LevelText.Medium,
  [Level.High]: LevelText.High,
  [Level.Critical]: LevelText.Critical,
};
