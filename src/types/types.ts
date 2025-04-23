export enum JeopardyStates {
  WaitingForPlayers = "waitingForPlayers",
  SelectingGame = "selectingGame",
  CategorySelection = "categorySelection",
  WaitingForBuzz = "waitingForBuzz",
  PlayerAnswering = "playerAnswering",
  CorrectAnswer = "correctAnswer",
  DailyDoubleWager = "dailyDoubleWager",
  RoundEnd = "roundEnd",
  FinalJeopardy = "finalJeopardy",
  CollectFinalJeopardyWagers = "collectFinalJeopardyWagers",
  MakeFinalJeopardyGuesses = "makeFinalJeopardyGuesses",
  RevealFinalJeopardyAnswer = "revealFinalJeopardyAnswer",
  GameOver = "gameOver",
}

export enum EventTypes {
  START_GAME = "START_GAME",
  SAVE_NAME_DRAWING = "SAVE_NAME_DRAWING",
  SELECT_GAME = "SELECT_GAME",
  SELECT_CATEGORY = "SELECT_CATEGORY",
  REVEAL_CLUE = "REVEAL_CLUE",
  BUZZ_IN = "BUZZ_IN",
  SUBMIT_WAGER = "SUBMIT_WAGER",
  SUBMIT_ANSWER = "SUBMIT_ANSWER",
  EVALUATE_ANSWER = "EVALUATE_ANSWER",
  NEXT_CLUE = "NEXT_CLUE",
  END_ROUND = "END_ROUND",
  START_FINAL_JEOPARDY = "START_FINAL_JEOPARDY",
  END_GAME = "END_GAME",
  TIME_UP = "TIME_UP",
  BUZZED_IN_TIME_UP = "BUZZED_IN_TIME_UP",
  RESTART_GAME = "RESTART_GAME",
  ADD_PLAYER = "ADD_PLAYER",
  SET_GAME = "SET_GAME",
}

export type Player = {
  name: string;
  score: number;
  nameSvg?: string;
  finalJeopardyWager: number | null;
  finalJeopardyGuess: string | null;
  finalJeopardyResult: boolean | null;
  hasBuzzed: boolean;
  buzzInTime: number | null;
};

export type Clue = {
  id: string;
  question: string;
  answer: string;
  value: number;
  categoryId: string;
  answered?: boolean;
  isDailyDouble: boolean;
  buzzedPlayers?: string[];
};

export type Category = {
  id: string;
  comments?: string;
  name: string;
  clues: Clue[];
  roundType: Rounds;
  gameId: number;
};

export type Game = {
  id: number;
  airDate: string;
  categories: Category[];
};

export type DBGame = {
  id: number;
  airDate: string;
  categories: Category[];
};

export enum Rounds {
  Jeopardy = "jeopardy",
  DoubleJeopardy = "doubleJeopardy",
  FinalJeopardy = "finalJeopardy",
}

export type GameContext = {
  gameId: string;
  players: Player[];
  categories: Category[];
  currentRound: Rounds;
  activePlayer: Player | null;
  activeClue: Clue | null;
  buzzedInPlayer: Player | null;
  dailyDoubleWager: number | null;
};

export type GameEvent =
  | { type: EventTypes.START_GAME }
  | { type: EventTypes.SELECT_GAME; gameId: string }
  | { type: EventTypes.SELECT_CATEGORY; categoryId: string; clueId: string }
  | { type: EventTypes.REVEAL_CLUE }
  | { type: EventTypes.BUZZ_IN; playerName: string }
  | { type: EventTypes.SUBMIT_ANSWER; playerName: string; answer: string }
  | { type: EventTypes.EVALUATE_ANSWER; playerName: string; isCorrect: boolean }
  | { type: EventTypes.NEXT_CLUE }
  | { type: EventTypes.END_ROUND }
  | { type: EventTypes.START_FINAL_JEOPARDY }
  | { type: EventTypes.END_GAME }
  | { type: EventTypes.TIME_UP }
  | { type: EventTypes.BUZZED_IN_TIME_UP }
  | { type: EventTypes.SUBMIT_WAGER; wager: number; playerName: string }
  | { type: EventTypes.RESTART_GAME }
  | { type: EventTypes.ADD_PLAYER; name: string }
  | { type: EventTypes.SAVE_NAME_DRAWING; playerName: string; nameSvg: string }
  | { type: EventTypes.SET_GAME; categories: Category[] };
