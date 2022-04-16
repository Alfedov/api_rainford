import { CanActivate, ExecutionContext} from "@nestjs/common";
import {Reflector} from "@nestjs/core";
import {Observable} from "rxjs";
import {ConfigService} from '../config/config.service';

export class DevGuard implements CanActivate {

    constructor(private readonly reflector: Reflector,
                private config: ConfigService) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        throw new Error("Method not implemented.");
    }
}