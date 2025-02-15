import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        statusTab: false,
        popup: false
    },

    reducers: {

        toggleStatusTab: (state) => {
            if (state.statusTab === false) {
                state.statusTab = true
            }
            else {
                state.statusTab = false
            }
        },
        toggleDonateStatusTab: (state) => {
            if (state.popup === false) {
                state.popup = true
            }
            else {
                state.popup = false
            }
        }

    }
})

export const { toggleStatusTab, toggleDonateStatusTab } = cartSlice.actions

export default cartSlice.reducer