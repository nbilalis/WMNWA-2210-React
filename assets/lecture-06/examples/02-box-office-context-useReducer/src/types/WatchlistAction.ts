interface WatchlistAction {
  type: 'ADD' | 'REMOVE';
  payload: number;
}

export default WatchlistAction;
