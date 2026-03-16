import { BACKEND_URL } from "@/constants/backendUrl";

export const getMachineBySlug = async (slug: string) => {
  if (!slug.trim()) {
    throw new Error("Machine name is required");
  }

  try {
    const response = await fetch(`${BACKEND_URL}/products/machines/${slug}`, {
      next: { tags: [`machine-${slug}`] }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch machine: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(`Error fetching machine ${slug}:`, error);
    return null;
  }
}

export const getAllMachines = async () => {


  try {
    const response = await fetch(`${BACKEND_URL}/products/machines`, {
      next: { tags: [`machine-all`] }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch machines: ${response.status}`);
    }
    
    const data = await response.json();
    return data;

  } catch (error) {
    console.error(`Error fetching machines: `, error);
    return null;
  }
}

export const getCategoryBySlug = async (slug: string) => {
  if (!slug.trim()) {
    throw new Error("Category name is required");
  }

  try {
    const response = await fetch(`${BACKEND_URL}/products/categories/${slug}`, {
      next: { tags: [`category-${slug}`] }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch category: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(`Error fetching category ${slug}:`, error);
    return null;
  }
};

export const getAllCategories = async () => {

  try {
    const response = await fetch(`${BACKEND_URL}/products/categories`, {
      next: { tags: [`category-all`] }
    });


    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(`Error fetching categories: `, error);
    return null;
  }
}
export const getManufacturerInfo = async () => {

  try {
    const response = await fetch(`${BACKEND_URL}/products/manufacturer`, {
      next: { tags: [`manufacturer`] }
    });


    if (!response.ok) {
      throw new Error(`Failed to fetch manufacturer info: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(`Error fetching manufacturer info: `, error);
    return null;
  }
}

export const getBlogBySlug = async (slug: string) => {
  if (!slug.trim()) {
    throw new Error("Blog slug is required");
  }

  try {
    const response = await fetch(`${BACKEND_URL}/blogs/${slug}`, {
      next: { tags: [`blog-${slug}`] }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(`Error fetching blog ${slug}:`, error);
    return null;
  }
};

export const getAllBlogs = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/blogs`, {
      next: { tags: [`blog-all`] }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error(`Error fetching blogs: `, error);
    return null;
  }
};