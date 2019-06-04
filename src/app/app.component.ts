import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  personObj = {
    first: 'Ish',
    last: 'Bhatt',
    age: 30,
    subjects: {
      english: true,
      chemistry: true,
      biology: true
    },
    contact: {
      email: 'test@yahoo.com',
      address: {
        street: '123 Main Street',
        city: 'Santa Clara',
        state: 'California',
        zip: '91919'
      }
    }
  }

  constructor() {
    // console.log(this.personObj);

    // console.log(JSON.stringify(this.personObj))

    let obj = Object.assign({}, JSON.parse(JSON.stringify(this.personObj)));

    // console.log(obj);

    obj.first = 'Test';
    obj.contact.address.street = 'Test street';
    // console.log(this.personObj);

    for (const [key, value] of Object.entries(obj)) {
      console.log(key);
      console.log(value);
    } 
    let socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    let check = {};
    for (let i of socks) {
      if (check[i]) {
        check[i]++;
      } else {
        check[i] = 1;
      }
    }
    let counter = 0;
    for (let j in check) {
      if (check[j]/2 >= 1) {
        counter += Math.floor(check[j]/2);
      }
    } 
    console.log(`Total number of pairs ${counter}`);
    console.log(check);

    let steps = 'DDUUDDUDUUUD';
    let seaLevel = 0;
    let mountains = 0;
    let valleys = 0;

    for (let i of steps) {
      if (i === 'U') {
        seaLevel++;
        if (seaLevel === 0 && seaLevel - 1 === -1) {
          valleys++;
        }
      } else if (i === 'D') {
        seaLevel--;
        if (seaLevel === 0 && seaLevel - 1 === -1) {
          mountains++;
        }
      }
    }
    console.log(seaLevel);
    console.log(valleys);
    let jump = 0;
    let clouds = [0, 0, 1, 0, 0, 1, 0];
      // clouds.forEach((element, index) => {
      //   if (element === 0) {
      //     if (clouds[index + 2] === 0) {
      //       jump++;
      //       index = index + 2;
      //     } else if (clouds[index + 1] === 0) {
      //       jump++;
      //       index = index + 1;
      //     }
      //   }
      // })
      for (let i = 0; i <= clouds.length; clouds[i + 2] === 0 ? i += 2 : i++) {
        if (clouds[i] === 0) {
          if (clouds[i + 2] === 0) {
            jump++;
          } else if (clouds[i + 1] === 0) {
            jump++;
          }
        }
      }
      console.log(jump);
      let countA = 0;
      let str = 'gfcaaaecbg';
      let strLength = 547602;

    
      for (let j = 0; j < str.length; j++) {
        if (str[j] === 'a') {
          countA++;
        }
      }
      console.log(strLength % str.length);
      countA = Math.floor(strLength * countA)/str.length;
      console.log(countA + '\nFormatted Number: ' + (countA));
    }


}
