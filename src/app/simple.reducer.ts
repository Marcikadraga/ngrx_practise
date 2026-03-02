import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'Helloo world', action:Action){
    console.log(action.type,state);
    
    switch (action.type) {
        case 'SPANISH':
            return 'Hola mundo';
        case 'FRENCH':
            return 'Bonjour le monde';
        default:
            return state;   
    }
    
}