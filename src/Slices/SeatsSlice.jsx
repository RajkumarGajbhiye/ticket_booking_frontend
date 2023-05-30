import { createSlice } from "@reduxjs/toolkit";

const seatsGenerator=(nr,nc)=>{
    let row=[]
    let seats=[]
    for(let n=1;n<=nr*nc;n++){
        row.push([n,false])
        if(n%nc===0){
            seats.push(row)
            row=[]
        }
    }
    return seats
}
const initialState={
    arrangement:seatsGenerator(7,10),
    amount:0
}
const SeatsSlice=createSlice({name:"data",initialState,reducers:{
    updateArrangement:(state,action)=>{
        if(state.arrangement[action.payload.index][action.payload.index2][1]!==999){
            state.arrangement[action.payload.index][action.payload.index2][1]=!state.arrangement[action.payload.index][action.payload.index2][1]
            alert("you have selected seat no "+state.arrangement[action.payload.index][action.payload.index2][0])
        }
    },
    calculateAmount:(state,action)=>{
        let x=[]
        state.arrangement.forEach((item,index)=>{item.forEach((item2,index2)=>{if(item2[1]===true && item2[1]!==999){x.push(index+1)}})})
        const factor=x.reduce((sum,n)=>{return sum+n})
        state.amount=100*factor
    },
    disableSeats:(state,action)=>{
        if(state.arrangement[action.payload.index][action.payload.index2][1]){
            state.arrangement[action.payload.index][action.payload.index2][1]=false
        }
        else{
            state.arrangement[action.payload.index][action.payload.index2][1]=999
        }
    },
    makeArrangement:(state,action)=>{
        console.log(action.payload)
        const r=parseInt(action.payload.row)
        const c=parseInt(action.payload.column)
        state.arrangement=seatsGenerator(r,c)
    }
}})

export const {updateArrangement,calculateAmount,disableSeats,makeArrangement}=SeatsSlice.actions
export default SeatsSlice.reducer