const STATE_INITIAL = 0
export default function (state = STATE_INITIAL, action) {

  let state_current

  switch (action.type) {
    case 'SUM':
      state_current = action.payload[0] + action.payload[1]
      break;
    case 'SUBTRACT':
      state_current = action.payload[0] - action.payload[1]
      break;
    case 'MULTI':
      state_current = action.payload[0] * action.payload[1]
      break;
    case 'CLEAR_RESULT':
      state_current = STATE_INITIAL
      break;
    default:
      state_current = state
      break;
  }

  return state_current
}