import axios from "axios"
import { URL_BASE } from "./baseURL"

const baseURL = URL_BASE

type newsType = {
  title: string
  content: string
  date: number
}

type subscriber = {
  id: string
  name: string
  email: string
}

const news: newsType = {
  title: "Outra notícia",
  content: "conteúdo",
  date: Date.now()
}

const createNews = (news: newsType): Promise<any> => {
  return axios.put(`${baseURL}/news`, news)
}

const getAllSubscribers = async (): Promise<subscriber[]> => {
  const response = await axios.get(`${baseURL}/subscribers`)
  return response.data
}

const getSubscribersIds = (subscribers: subscriber[]): string[] => {
  return subscribers.map((subscriber) => {
    return subscriber.id
  })
}

const notifyAllSubscribers = async (ids: string[]): Promise<void> => {

    try {
      const requests = ids.map(id => axios.post(`${baseURL}/notifications`, {
        subscriberId: id,
        message: "Confira as últimas notícias!"
      }))
    
      await Promise.all(requests)

      console.log(`Notifições enviadas`)

    } catch (error) {
      console.log(`Erro ao notificar assinantes`)
    }

}

const main = async (): Promise<void> => {
  try {

    await createNews(news)

    const subscribers = await getAllSubscribers()

    const ids = getSubscribersIds(subscribers)

    await notifyAllSubscribers(ids)

  } catch (err: any) {
    console.log(err.response?.data || err.message)
  }
}

main()