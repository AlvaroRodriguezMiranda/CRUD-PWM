import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "computers-5ade5", appId: "1:7113171446:web:3c2426dd448cd4ccdb27d7", storageBucket: "computers-5ade5.firebasestorage.app", apiKey: "AIzaSyBtBSl8ts1fSXmLVeTsmfjx3syXIQzqjOY", authDomain: "computers-5ade5.firebaseapp.com", messagingSenderId: "7113171446", measurementId: "G-DRM66L26BX" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
