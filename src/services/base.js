import { request, config } from '@/utils'

export async function getI18n(lang) {
  let path = '/i18n'
  if (lang) {
    path = `/i18n/${lang}`
  } 
  return request(`${config.api.base}/${encodeURIComponent(path)}`)
}

export async function getSystem() {
  const path = '/system'
  return request(`${config.api.base}/${encodeURIComponent(path)}`)
}

export async function getMenu() {
  const path = '/menu'
  return request(`${config.api.base}/${encodeURIComponent(path)}`)
}