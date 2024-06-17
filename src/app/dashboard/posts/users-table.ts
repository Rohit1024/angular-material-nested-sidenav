import { User } from "@/app/shared/models";
import { DataSource } from "@angular/cdk/collections";
import { Observable, ReplaySubject } from "rxjs";

export class UsersDataSource extends DataSource<User> {
  private _dataStream = new ReplaySubject<User[]>();

  constructor(initialData: User[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<User[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: User[]) {
    this._dataStream.next(data);
  }
}
