import {CHOOSECITY_TYPE} from '@/typeName'
export function chooseCity(newCity) {
    return{
        type:CHOOSECITY_TYPE,
        city:newCity
    }
}