import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { ApiError, AuthUser, BadRequestResponse, CreateUploadBody, CreateUserRequest, ForbiddenResponse, HealthStatus, LoginRequest, NotFoundResponse, UnauthorizedResponse, UpdateUserRequest, Upload } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Login dengan username + password
 */
export declare const getAuthLoginUrl: () => string;
export declare const authLogin: (loginRequest: LoginRequest, options?: RequestInit) => Promise<AuthUser>;
export declare const getAuthLoginMutationOptions: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof authLogin>>, TError, {
        data: BodyType<LoginRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof authLogin>>, TError, {
    data: BodyType<LoginRequest>;
}, TContext>;
export type AuthLoginMutationResult = NonNullable<Awaited<ReturnType<typeof authLogin>>>;
export type AuthLoginMutationBody = BodyType<LoginRequest>;
export type AuthLoginMutationError = ErrorType<ApiError>;
/**
 * @summary Login dengan username + password
 */
export declare const useAuthLogin: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof authLogin>>, TError, {
        data: BodyType<LoginRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof authLogin>>, TError, {
    data: BodyType<LoginRequest>;
}, TContext>;
/**
 * @summary Logout sesi aktif
 */
export declare const getAuthLogoutUrl: () => string;
export declare const authLogout: (options?: RequestInit) => Promise<void>;
export declare const getAuthLogoutMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof authLogout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof authLogout>>, TError, void, TContext>;
export type AuthLogoutMutationResult = NonNullable<Awaited<ReturnType<typeof authLogout>>>;
export type AuthLogoutMutationError = ErrorType<unknown>;
/**
 * @summary Logout sesi aktif
 */
export declare const useAuthLogout: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof authLogout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof authLogout>>, TError, void, TContext>;
/**
 * @summary User aktif berdasarkan cookie sesi
 */
export declare const getAuthMeUrl: () => string;
export declare const authMe: (options?: RequestInit) => Promise<AuthUser>;
export declare const getAuthMeQueryKey: () => readonly ["/api/auth/me"];
export declare const getAuthMeQueryOptions: <TData = Awaited<ReturnType<typeof authMe>>, TError = ErrorType<ApiError>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof authMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof authMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type AuthMeQueryResult = NonNullable<Awaited<ReturnType<typeof authMe>>>;
export type AuthMeQueryError = ErrorType<ApiError>;
/**
 * @summary User aktif berdasarkan cookie sesi
 */
export declare function useAuthMe<TData = Awaited<ReturnType<typeof authMe>>, TError = ErrorType<ApiError>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof authMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Daftar semua user (kurator/admin only)
 */
export declare const getListUsersUrl: () => string;
export declare const listUsers: (options?: RequestInit) => Promise<AuthUser[]>;
export declare const getListUsersQueryKey: () => readonly ["/api/users"];
export declare const getListUsersQueryOptions: <TData = Awaited<ReturnType<typeof listUsers>>, TError = ErrorType<UnauthorizedResponse | ForbiddenResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listUsers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListUsersQueryResult = NonNullable<Awaited<ReturnType<typeof listUsers>>>;
export type ListUsersQueryError = ErrorType<UnauthorizedResponse | ForbiddenResponse>;
/**
 * @summary Daftar semua user (kurator/admin only)
 */
export declare function useListUsers<TData = Awaited<ReturnType<typeof listUsers>>, TError = ErrorType<UnauthorizedResponse | ForbiddenResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Buat user baru (kurator/admin only)
 */
export declare const getCreateUserUrl: () => string;
export declare const createUser: (createUserRequest: CreateUserRequest, options?: RequestInit) => Promise<AuthUser>;
export declare const getCreateUserMutationOptions: <TError = ErrorType<BadRequestResponse | UnauthorizedResponse | ForbiddenResponse | ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError, {
        data: BodyType<CreateUserRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError, {
    data: BodyType<CreateUserRequest>;
}, TContext>;
export type CreateUserMutationResult = NonNullable<Awaited<ReturnType<typeof createUser>>>;
export type CreateUserMutationBody = BodyType<CreateUserRequest>;
export type CreateUserMutationError = ErrorType<BadRequestResponse | UnauthorizedResponse | ForbiddenResponse | ApiError>;
/**
 * @summary Buat user baru (kurator/admin only)
 */
export declare const useCreateUser: <TError = ErrorType<BadRequestResponse | UnauthorizedResponse | ForbiddenResponse | ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError, {
        data: BodyType<CreateUserRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createUser>>, TError, {
    data: BodyType<CreateUserRequest>;
}, TContext>;
export declare const getGetUserUrl: (id: string) => string;
export declare const getUser: (id: string, options?: RequestInit) => Promise<AuthUser>;
export declare const getGetUserQueryKey: (id: string) => readonly [`/api/users/${string}`];
export declare const getGetUserQueryOptions: <TData = Awaited<ReturnType<typeof getUser>>, TError = ErrorType<UnauthorizedResponse | NotFoundResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetUserQueryResult = NonNullable<Awaited<ReturnType<typeof getUser>>>;
export type GetUserQueryError = ErrorType<UnauthorizedResponse | NotFoundResponse>;
export declare function useGetUser<TData = Awaited<ReturnType<typeof getUser>>, TError = ErrorType<UnauthorizedResponse | NotFoundResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateUserUrl: (id: string) => string;
export declare const updateUser: (id: string, updateUserRequest: UpdateUserRequest, options?: RequestInit) => Promise<AuthUser>;
export declare const getUpdateUserMutationOptions: <TError = ErrorType<BadRequestResponse | UnauthorizedResponse | ForbiddenResponse | NotFoundResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateUser>>, TError, {
        id: string;
        data: BodyType<UpdateUserRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateUser>>, TError, {
    id: string;
    data: BodyType<UpdateUserRequest>;
}, TContext>;
export type UpdateUserMutationResult = NonNullable<Awaited<ReturnType<typeof updateUser>>>;
export type UpdateUserMutationBody = BodyType<UpdateUserRequest>;
export type UpdateUserMutationError = ErrorType<BadRequestResponse | UnauthorizedResponse | ForbiddenResponse | NotFoundResponse>;
export declare const useUpdateUser: <TError = ErrorType<BadRequestResponse | UnauthorizedResponse | ForbiddenResponse | NotFoundResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateUser>>, TError, {
        id: string;
        data: BodyType<UpdateUserRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateUser>>, TError, {
    id: string;
    data: BodyType<UpdateUserRequest>;
}, TContext>;
export declare const getDeleteUserUrl: (id: string) => string;
export declare const deleteUser: (id: string, options?: RequestInit) => Promise<void>;
export declare const getDeleteUserMutationOptions: <TError = ErrorType<UnauthorizedResponse | ForbiddenResponse | NotFoundResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteUser>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteUser>>, TError, {
    id: string;
}, TContext>;
export type DeleteUserMutationResult = NonNullable<Awaited<ReturnType<typeof deleteUser>>>;
export type DeleteUserMutationError = ErrorType<UnauthorizedResponse | ForbiddenResponse | NotFoundResponse>;
export declare const useDeleteUser: <TError = ErrorType<UnauthorizedResponse | ForbiddenResponse | NotFoundResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteUser>>, TError, {
        id: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteUser>>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Unggah berkas (multipart/form-data, field "file")
 */
export declare const getCreateUploadUrl: () => string;
export declare const createUpload: (createUploadBody: CreateUploadBody, options?: RequestInit) => Promise<Upload>;
export declare const getCreateUploadMutationOptions: <TError = ErrorType<UnauthorizedResponse | ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createUpload>>, TError, {
        data: BodyType<CreateUploadBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createUpload>>, TError, {
    data: BodyType<CreateUploadBody>;
}, TContext>;
export type CreateUploadMutationResult = NonNullable<Awaited<ReturnType<typeof createUpload>>>;
export type CreateUploadMutationBody = BodyType<CreateUploadBody>;
export type CreateUploadMutationError = ErrorType<UnauthorizedResponse | ApiError>;
/**
 * @summary Unggah berkas (multipart/form-data, field "file")
 */
export declare const useCreateUpload: <TError = ErrorType<UnauthorizedResponse | ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createUpload>>, TError, {
        data: BodyType<CreateUploadBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createUpload>>, TError, {
    data: BodyType<CreateUploadBody>;
}, TContext>;
/**
 * @summary Metadata + URL unduh berkas (perlu sesi login)
 */
export declare const getGetUploadUrl: (id: string) => string;
export declare const getUpload: (id: string, options?: RequestInit) => Promise<Upload>;
export declare const getGetUploadQueryKey: (id: string) => readonly [`/api/uploads/${string}`];
export declare const getGetUploadQueryOptions: <TData = Awaited<ReturnType<typeof getUpload>>, TError = ErrorType<UnauthorizedResponse | NotFoundResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUpload>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getUpload>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetUploadQueryResult = NonNullable<Awaited<ReturnType<typeof getUpload>>>;
export type GetUploadQueryError = ErrorType<UnauthorizedResponse | NotFoundResponse>;
/**
 * @summary Metadata + URL unduh berkas (perlu sesi login)
 */
export declare function useGetUpload<TData = Awaited<ReturnType<typeof getUpload>>, TError = ErrorType<UnauthorizedResponse | NotFoundResponse>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUpload>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map