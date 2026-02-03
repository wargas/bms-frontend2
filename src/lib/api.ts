import axios from "axios";
import { get } from "lodash";

const urlApi = import.meta.env.VITE_API_URL

const Api = axios.create({
    baseURL: urlApi,
    headers: {
        Accept: 'application/json'
    }
})

Api.interceptors.request.use(
    async (config) => {
        if(config.headers.has('x-login')) {
            return config;
        }
        try {
            const token = JSON.parse(localStorage.getItem('auth_token') || "") as string;
            if (token) {
                const payload = window.atob(token.split('.')[1]);
                const exp =  get(JSON.parse(payload), 'exp');
                
                if(exp < new Date().getTime()/1000) {
                    // const result = await modal(ModalRefreshToken, {}, {title: 'A senha expirou', size: 'xs'})

                    // if(result) {
                    //     config.headers.setAuthorization(`Bearer ${result}`)
                    // }
                    
                } else {
                    
                }
                config.headers.setAuthorization(`Bearer ${token}`)

            }
            
        } catch (error) { }

        return config;
    },
    (error) => {
        throw (error);
    }
)

Api.interceptors.request.use((config) => {
    return config
}, error => {

    const event = new CustomEvent('api-error', { detail: error  })

    window.dispatchEvent(event);

    return Promise.reject(error)
})

export async function defaultQueryFn({ queryKey }: any) {
    const { data } = await Api.get(queryKey[0])

    return data;
}

export default Api;