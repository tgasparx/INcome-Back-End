export default class CompanyDataUseCase{
    companiesRepository: any
constructor(companiesRepository: any){
    this.companiesRepository = companiesRepository
}
async execute(token: string){
    const templateCompanyData = {
        "id": "8b2249be-10b5-46c2-9e10-e6a48c87a236",
        "name": "teste",
        "email": "teste3@mail",
        "created_at": "2022-08-10T16:20:41.745Z",
        "token": {
            "type": "Bearer",
            "tokenHash": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdGUiLCJlbWFpbCI6InRlc3RlM0BtYWlsIiwiaWF0IjoxNjYwMTM3NjQ4fQ.JMyHegdrZ3iTjj5IiMwnCIpQp71cL3giy1fBJsTEg3k"
        }
    }
    return templateCompanyData
}
}