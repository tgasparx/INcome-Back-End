import IUser from "../../users/models/IUser"


export default interface IListEmployees{
    company_name: string
    employees: {
      page: number
      perPage: number
      total_records: number
      all_employees: IUser[]
    }
}