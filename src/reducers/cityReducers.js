import { CHOOSECITY_TYPE } from '@/typeName'
export default function cityReducers(state = '合肥', action) {
    switch (action.type) {
        case CHOOSECITY_TYPE:
            return action.city;
        default:
            return state
    }
}