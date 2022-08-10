

export default class QueryController{

    constructor(){}
    queryCreateTableUsers(){
        return `CREATE TABLE users(
    user_id varchar(150) UNIQUE NOT NULL,
    user_name varchar(150) NOT NULL,
    user_email varchar(50) UNIQUE NOT NULL,
    user_password varchar(100) NOT NULL,
    created_at TIMESTAMP(100) NOT NULL,
    updated_at varchar(200),
    last_login TIMESTAMP,
    token varchar(255) UNIQUE,
    token_created_at TIMESTAMP,
    owner_company_id varchar(150)
    );
    ALTER TABLE users
    add PRIMARY KEY(user_id),
    add FOREIGN KEY(token) REFERENCES users_auths (logged_token),
    add FOREIGN KEY(owner_company_id) REFERENCES companies (company_id)`
    }
    queryDropTableUsers(){
        return "DROP TABLE users"
    }
    queryCreateTableCompanies(){
        return `CREATE TABLE companies(
    company_id varchar(150) UNIQUE NOT NULL,
    company_name varchar(150) NOT NULL,
    company_email varchar(50) UNIQUE NOT NULL,
    company_password varchar(100) NOT NULL,
    company_cnpj varchar(100) UNIQUE NOT NULL,
    created_at varchar(100),
    updated_at varchar(100),
    last_login TIMESTAMP,
    token varchar(255) UNIQUE,
    token_created_at TIMESTAMP
    )`
    }
    queryDropTableCompanies(){
        return "DROP TABLE companies"
    }
    queryCreateTableUsersAuths(){
        return `CREATE TABLE users_auths(
        auth_id varchar(150) UNIQUE NOT NULL,
        logged_id varchar(255) UNIQUE NOT NULL,
        logged_name varchar(150) NOT NULL,
        logged_token varchar(255) UNIQUE NOT NULL,
        auth_at TIMESTAMP        
        )`
    }
    queryDropTableUsersAuths(){
        return "DROP TABLE usersAuths"
    }
    queryCreateTableCompaniesAuths(){
        return `CREATE TABLE companies_auths(
        auth_id varchar(150) UNIQUE NOT NULL,
        logged_id varchar(255) UNIQUE NOT NULL,
        logged_name varchar(150) NOT NULL,
        logged_token varchar(255) UNIQUE NOT NULL,
        auth_at TIMESTAMP
        )`
    }
    queryDroptableCompaniesAuths(){
        return "DROP TABLE companies_auths"
    }
    queryAlterTableUsers(){
        return `ALTER TABLE companies
        add FOREIGN KEY (token)
        REFERENCES companies_auths (logged_id)`
        // `ALTER TABLE users
        //         add FOREIGN KEY (owner_company_id)
        //         REFERENCES companies (company_id)`
    }
    queryAlterTableCompanies(){

    }
    queryInsertNewCompany(){
        return `INSERT INTO companies(company_id, company_name, company_email, company_password, company_cnpj, created_at, updated_at, last_login, token, token_created_at) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`
    }
    queryInsertNewUser(){
        return `INSERT INTO users(
            user_id, user_name, user_email, user_password, created_at, updated_at, last_login, token, token_created_at, owner_company_id
        ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`
    }
}