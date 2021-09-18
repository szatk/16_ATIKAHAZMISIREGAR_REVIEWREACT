import { createSlice } from '@reduxjs/toolkit'

const regex = {
  fullname: /^[a-zA-Z][a-zA-Z\s]{6,50}/,
  email:
    /^[a-zA-Z0-9](([a-zA-Z0-9]+\.)|([a-zA-Z0-9])*)[a-zA-Z0-9]+@([a-zA-Z]+\.)+([a-zA-Z]+)$/,
  phone: /^(08)([0-9]{8,11})$/
}

const initialState = {
  fullname: {
    value: '',
    touched: false,
    required: true,
    err: false,
    errMessage: 'Hanya karakter alphabet dengan panjang 6 - 50 karakter'
  },
  email: {
    value: '',
    touched: false,
    required: true,
    err: false,
    errMessage:
      'Email tidak valid. Pastikan penulisan sudah benar seperti: example@mail.com'
  },
  phone: {
    value: '',
    touched: false,
    required: true,
    err: false,
    errMessage: 'Nomor handphone tidak valid. Pastikan hanya berisi angka'
  },
  nationality: {
    value: 'Indonesia'
  },
  message: {
    value: ''
  }
}

const slice = createSlice({
  name: 'contact',
  initialState: initialState,
  reducers: {
    changed: function (state, action) {
      const { name, value } = action.payload

      if (!state[name]) return
      state[name].value = value

      /* Checking if field name has regex for validating value */
      if (regex[name]) {
        const isValid = regex[name].test(value)
        state[name].err = !isValid
      }
    },
    touched: function (state, action) {
      const { name } = action.payload

      if (!state[name].hasOwnProperty('touched') || state[name].touched) return
      state[name].touched = true
    },
    reset: function () {
      return initialState
    },
    findAllInvalid: function (state) {
      for (const field in state) {
        const input = state[field]

        if (input.err || (input.required && !input.value)) {
          state[field].err = true
          state[field].touched = true
        }
      }
    }
  }
})

export default slice.reducer
export const { changed, reset, touched, findAllInvalid } = slice.actions