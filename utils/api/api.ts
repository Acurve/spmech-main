import axios from "axios"

export const getMachineBySlug = async (slug: string) => {
  if (!slug.trim()) {
    throw new Error("Machine name is required")
  }

  const response = await axios.get(`/api/products/machines/${slug}`)
  return response
}

export const getAllMachines = async () => {

  const response = await axios.get(`/api/products/machines`)
  return response
}

export const getCategoryBySlug = async (slug: string) => {
  if (!slug.trim()) {
    throw new Error("Category name is required")
  }

  const response = await axios.get(`/api/products/categories/${slug}`)
  return response
}

export const getAllCategories = async () => {

  const response = await axios.get(`/api/products/categories`)
  
  return response
}