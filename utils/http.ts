import { APIRequestContext, APIResponse } from "@playwright/test";
import config from '../playwright.config';

export class HtttpRequests {
    private readonly request: APIRequestContext;
    private baseUrl: any;

    constructor(request: APIRequestContext) {
        this.request = request
        this.baseUrl = config.use?.baseURL;
    }
    async get(url: string, options?: any): Promise<APIResponse>{
        return await this.request.get(`${this.baseUrl}/${url}`, { data: options })
    }

    async post(url: string, options?: any): Promise<APIResponse>{
        return await this.request.post(`${this.baseUrl}/${url}`, { data: options })
    }
}