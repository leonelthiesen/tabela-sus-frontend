import { createReducer, on, Action } from '@ngrx/store';

// const reducer = createReducer(
//     {} as ProcedimentoState, // TODO: ver se é a melhor forma de iniciar o estado
//     on(procedimentoActions.procedimentosGetSuccess, (state, payload) => ({
//         ...state,
//         procedimentos: payload.procedimentos
//     })),
//     on(procedimentoActions.procedimentosFilterSet, (state, payload) => ({
//         ...state,
//         procedimentosFilter: payload.filter
//     })),
//     on(procedimentoActions.procedimentosProcedimentoGetSuccess, (state, payload) => ({
//         ...state,
//         procedimento: payload.procedimento
//     })),
// );

// export function procedimentoReducer(state: ProcedimentoState | undefined, action: Action) {
//     return reducer(state, action);
// }
