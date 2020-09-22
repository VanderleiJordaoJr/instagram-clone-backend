import dotenv from 'dotenv'

dotenv.config()

const envVarWithDefault = (environment: string | undefined, defaultValue: string): string => {
	return (environment !== undefined) ? environment : defaultValue
}

const envVarWithoutDefault = (environment: string | undefined): string => {
	if (environment === undefined) {
		throw new Error('.env is missing a variable')
	}
	return environment
}

export const PORT: string = envVarWithDefault(process.env.PORT, '3000')
export const DB_HOST: string = envVarWithoutDefault(process.env.DB_HOST)
export const DB_DATABASE: string = envVarWithoutDefault(process.env.DB_DATABASE)
export const DB_USER: string = envVarWithoutDefault(process.env.DB_USER)
export const DB_PASSWORD: string = envVarWithoutDefault(process.env.DB_PASSWORD)
