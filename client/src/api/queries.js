import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from '../lib/axios';

// Blog Queries
export const useBlogs = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ['blogs', page, limit],
    queryFn: () =>
      axios.get(`/blogs?page=${page}&limit=${limit}`).then((res) => res.data),
  });
};

export const useBlog = (id) => {
  return useQuery({
    queryKey: ['blog', id],
    queryFn: () => axios.get(`/blogs/${id}`).then((res) => res.data),
    enabled: !!id,
  });
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => axios.post('/blogs', data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) =>
      axios.put(`/blogs/${id}`, data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => axios.delete(`/blogs/${id}`).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
};

// Project Queries
export const useProjects = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ['projects', page, limit],
    queryFn: () =>
      axios
        .get(`/projects?page=${page}&limit=${limit}`)
        .then((res) => res.data),
  });
};

export const useProject = (id) => {
  return useQuery({
    queryKey: ['project', id],
    queryFn: () => axios.get(`/projects/${id}`).then((res) => res.data),
    enabled: !!id,
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => axios.post('/projects', data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) =>
      axios.put(`/projects/${id}`, data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => axios.delete(`/projects/${id}`).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};

// Product Queries
export const useProducts = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ['products', page, limit],
    queryFn: () =>
      axios
        .get(`/products?page=${page}&limit=${limit}`)
        .then((res) => res.data),
  });
};

export const useProduct = (id) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => axios.get(`/products/${id}`).then((res) => res.data),
    enabled: !!id,
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => axios.post('/products', data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) =>
      axios.put(`/products/${id}`, data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => axios.delete(`/products/${id}`).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

// Comment Queries
export const useComments = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ['comments', page, limit],
    queryFn: () =>
      axios
        .get(`/comments?page=${page}&limit=${limit}`)
        .then((res) => res.data),
  });
};

export const useUpdateCommentStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }) =>
      axios.patch(`/comments/${id}/status`, { status }).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => axios.delete(`/comments/${id}`).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
  });
};
