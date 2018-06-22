import axios from 'axios'
import { initialize } from 'redux-form'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = { vendor: {} }

export function getVendors() {
    return dispatch => {
        axios.get(`${BASE_URL}/vendor`)
            .then(resp => dispatch({ type: 'VENDOR_FETCHED', payload: resp.data }))
    }
}

export function updateVendor(values) {
    console.log('submit')
    return dispatch => {
        const id = values._id ? values._id : ''
        console.log(id)
        axios.put(`${BASE_URL}/vendor/${id}`, values)
            .then(resp => {
                console.log('sucesso!')
                dispatch({ type: 'VENDOR_ACTION_MESSAGE', payload: [{ type: "success", message: "Registro atualizado com sucesso." }] })
                dispatch(init())
            })
            .catch(e => {
                console.log(JSON.stringify(e))
                if (e.response === undefined)
                    dispatch({ type: 'VENDOR_ACTION_MESSAGE', payload: [{ type: "danger", message: "Erro na requisição ao servidor." }] })
                else {
                    let errorArray = []
                    e.response.data.errors.forEach(error => errorArray.push({ type: "danger", message: error }))
                    dispatch({ type: 'VENDOR_ACTION_MESSAGE', payload: errorArray })
                }
            })
    }

}

export function createVendor(values) {
    console.log('submit')
    return dispatch => {
        const id = values._id ? values._id : ''
        console.log(id)
        axios.post(`${BASE_URL}/vendor`, values)
            .then(resp => {
                console.log('sucesso!')
                dispatch({ type: 'VENDOR_ACTION_MESSAGE', payload: [{ type: "success", message: "Registro atualizado com sucesso." }] })
                dispatch(init())
            })
            .catch(e => {
                console.log(JSON.stringify(e))
                if (e.response === undefined)
                    dispatch({ type: 'VENDOR_ACTION_MESSAGE', payload: [{ type: "danger", message: "Erro na requisição ao servidor." }] })
                else {
                    let errorArray = []
                    e.response.data.errors.forEach(error => errorArray.push({ type: "danger", message: error }))
                    dispatch({ type: 'VENDOR_ACTION_MESSAGE', payload: errorArray })
                }
            })
    }

}

export function remove(values) {
    return dispatch => {
        const id = values._id ? values._id : ''
        console.log(id)
        axios.delete(`${BASE_URL}/vendor/${id}`, values)
            .then(resp => {
                console.log('sucesso!')
                dispatch({ type: 'VENDOR_ACTION_MESSAGE', payload: [{ type: "success", message: "Registro eliminado com sucesso." }] })
                dispatch(init())
            })
            .catch(e => {
                console.log(JSON.stringify(e))
                e.response.data.errors.forEach(error => console.log('Erro', error))
            })
    }
}

export function updateFormValues(vendor) {
    return dispatch => {
        dispatch({ type: 'VENDOR_UPDATED', payload: vendor })
    }
}

export function showUpdate(vendor) {
    return [
        updateFormValues(vendor),
        initialize('vendorForm', vendor)
    ]
}

export function addVendor() {
    return [
        initialize('vendorForm', INITIAL_VALUES)
    ]
}

export function init() {
    return [
        getVendors(),
        initialize('vendorForm', INITIAL_VALUES)
    ]
}