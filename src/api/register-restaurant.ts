import { api } from "@/lib/axios"

export interface SignInBody{
    restaurantName: string
    managerName: string
    email: string
    phone: string
}

export async function registerRestaurant({ restaurantName, managerName, email, phone}: SignInBody){
    await api.post('/restaurants', {restaurantName, managerName, email, phone})
}