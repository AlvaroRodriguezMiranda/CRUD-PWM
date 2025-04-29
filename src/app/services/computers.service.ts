import {inject, Injectable } from '@angular/core';
import {addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc} from '@angular/fire/firestore';
import {Computer} from '../models/computer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ComputersService {

  firestore: Firestore = inject(Firestore);

  constructor() { }

  addComputer(computer: Computer) {
    const computerRef = collection(this.firestore, 'computers');
    return addDoc(computerRef, computer);
  }

  getAllComputers(): Observable<Computer[]> {
    const computersRef = collection(this.firestore, 'computers');
    return collectionData(computersRef, {idField: 'id'}) as Observable<Computer[]>;
  }

  updateComputer(id: string, updateComputer: Partial<Computer>) {
    const computerRef = doc(this.firestore, `computers/${id}`);
    return updateDoc(computerRef, updateComputer);
  }

  deleteComputer(id: string) {
    const computerRef = doc(this.firestore, `computers/${id}`);
    return deleteDoc(computerRef);
  }
}
