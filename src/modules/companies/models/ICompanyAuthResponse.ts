

export default interface ICompanyAuthReponse{
    id: string
    name: string
    email: string
    created_at: Date
    token: {
      type: string
      tokenHash: string
    }
}