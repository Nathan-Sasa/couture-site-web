import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IReal } from "../interfaces/interfaces";

@Injectable({
    providedIn: 'root'
})

export class RealService {

    real_api = environment.realApi

    constructor(
        private http: HttpClient
    ) {}

    getReal(): Observable<IReal[]>{
        return this.http.get<IReal[]>(this.real_api)
    }
}