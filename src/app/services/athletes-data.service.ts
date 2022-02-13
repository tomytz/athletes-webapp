import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AthletesDataService {
  data: {
    img: string;
    rank: number;
    personalBest: number;
    wind: string;
    competitor: {
      title: string;
      ref: string;
    };
    dob: string;
    nat: {
      img: string;
      text: string;
    };
    pos: number;
    venue: string;
    date: string;
    results: number;
  }[] = [];
  columns: string[] = [];

  constructor(private httpService: HttpClient) {
    this.setData();
    // Εαν χρειαστεί σύνδεση με το backend μπορουμε να χρησημοποιησουμε το httpService.get η httpService.post και να κανουμε set
  }
// Δημιουργία των δεδομένων του table
  setData(data?: any, columns?: string[]) {
    this.columns = columns ?? ['Img', 'Rank', 'Personal best', 'Wind', 'Competitor', 'DOB', 'Nat', 'Pos', 'Venue', 'Date', 'Results'];
    this.data = data ?? [
      {
        img: 'assets/images/Usain_Bolt.jpg',
        rank: 1,
        personalBest: 9.58,
        wind: '+0.9',
        competitor: {
          title: 'Usain BOLT',
          ref: 'https://en.wikipedia.org/wiki/Usain_Bolt'
        },
        dob: new Date('1986-08-21T00:00:00.000Z'),
        nat: {
          img: 'https://media.aws.iaaf.org/Flags/JAM.gif',
          text: 'JAM'
        },
        pos: 1,
        venue: 'Olympiastadion, Berlin (GER)',
        date: new Date('2009-08-16T00:00:00.000Z'),
        results: 1356
      },
      {
        img: 'assets/images/Tyson_Gay.jfif',
        rank: 2,
        personalBest: 9.69,
        wind: '+2.0',
        competitor: {
          title: 'Tyson GAY',
          ref: 'https://en.wikipedia.org/wiki/Tyson_Gay'
        },
        dob: new Date('1982-08-09T00:00:00.000Z'),
        nat: {
          img: 'https://media.aws.iaaf.org/Flags/USA.gif',
          text: 'USA'
        },
        pos: 1,
        venue: 'Shanghai (CHN)',
        date: new Date('2009-09-20T00:00:00.000Z'),
        results: 1316
      },
      {
        img: 'assets/images/Yohan_Blake.jpg',
        rank: 2,
        personalBest: 9.69,
        wind: '-0.1',
        competitor: {
          title: 'Yohan BLAKE',
          ref: 'https://en.wikipedia.org/wiki/Yohan_Blake'
        },
        dob: new Date('1989-12-29T00:00:00.000Z'),
        nat: {
          img: 'https://media.aws.iaaf.org/Flags/JAM.gif',
          text: 'JAM'
        },
        pos: 1,
        venue: 'Stade Olympique de la Pontaise, Lausanne (SUI)',
        date: new Date('2012-08-23T00:00:00.000Z'),
        results: 1316
      },
      {
        img: 'assets/images/Asafa_Powell.jpg',
        rank: 4,
        personalBest: 9.72,
        wind: '+0.2',
        competitor: {
          title: 'https://en.wikipedia.org/wiki/Asafa_Powell',
          ref: 'Asafa Powell'
        },
        dob: new Date('1986-11-23T00:00:00.000Z'),
        nat: {
          img: 'https://media.aws.iaaf.org/Flags/JAM.gif',
          text: 'JAM'
        },
        pos: 1,
        venue: 'Stade Olympique de la Pontaise, Lausanne (SUI)',
        date: new Date('2008-11-02T00:00:00.000Z'),
        results: 1305
      },
      {
        img: 'assets/images/Justin_Gatlin.jpg',
        rank: 5,
        personalBest: 9.74,
        wind: '+0.9',
        competitor: {
          title: 'https://en.wikipedia.org/wiki/Justin_Gatlin',
          ref: 'Justin Gatlin'
        },
        dob: new Date('1982-02-10T00:00:00.000Z'),
        nat: {
          img: 'https://media.aws.iaaf.org/Flags/USA.gif',
          text: 'USA'
        },
        pos: 1,
        venue: 'Suhaim bin Hamad Stadium, Doha (QAT)',
        date: new Date('2015-05-15T00:00:00.000Z'),
        results: 1298
      },
      {
        img: 'assets/images/Christian_Coleman.jpg',
        rank: 6,
        personalBest: 9.76,
        wind: '+0.6',
        competitor: {
          title: 'https://en.wikipedia.org/wiki/Christian_Coleman',
          ref: 'Christian Coleman'
        },
        dob: new Date('1996-03-06T00:00:00.000Z'),
        nat: {
          img: 'https://media.aws.iaaf.org/Flags/USA.gif',
          text: 'USA'
        },
        pos: 1,
        venue: 'Khalifa International Stadium, Doha (QAT)',
        date: new Date('2019-09-28T00:00:00.000Z'),
        results: 1291
      },
      {
        img: 'assets/images/Trayvon_Bromell.jpg',
        rank: 6,
        personalBest: 9.76,
        wind: '+1.2',
        competitor: {
          title: 'https://en.wikipedia.org/wiki/Trayvon_Bromell',
          ref: 'Trayvon Bromell'
        },
        dob: new Date('1995-07-10T00:00:00.000Z'),
        nat: {
          img: 'https://media.aws.iaaf.org/Flags/USA.gif',
          text: 'USA'
        },
        pos: 1,
        venue: 'Moi International Sports Centre, Kasarani, Nairobi (KEN)',
        date: new Date('2021-09-18T00:00:00.000Z'),
        results: 1291
      },
      {
        img: 'assets/images/Ferdinand_Omurwa.jpg',
        rank: 8,
        personalBest: 9.77,
        wind: '+1.2',
        competitor: {
          title: 'https://en.wikipedia.org/wiki/Ferdinand_Omurwa',
          ref: 'Ferdinand Omurwa'
        },
        dob: new Date('1996-01-02T00:00:00.000Z'),
        nat: {
          img: 'https://media.aws.iaaf.org/Flags/KEN.gif',
          text: 'KEN'
        },
        pos: 2,
        venue: 'Moi International Sports Centre, Kasarani, Nairobi (KEN)',
        date: new Date('2021-09-18T00:00:00.000Z'),
        results: 1287
      },
      {
        img: 'assets/images/Nesta_Carter.jpg',
        rank: 9,
        personalBest: 9.78,
        wind: '+0.9',
        competitor: {
          title: 'https://en.wikipedia.org/wiki/Nesta_Carter',
          ref: 'Nesta CARTER'
        },
        dob: new Date('1985-10-11T00:00:00.000Z'),
        nat: {
          img: 'https://media.aws.iaaf.org/Flags/JAM.gif',
          text: 'JAM'
        },
        pos: 1,
        venue: 'Stadio Guidobaldi, Rieti (ITA)',
        date: new Date('2010-08-29T00:00:00.000Z'),
        results: 1283
      },
      {
        img: 'assets/images/Maurice_Greene.jpg',
        rank: 10,
        personalBest: 9.79,
        wind: '+0.1',
        competitor: {
          title: 'https://en.wikipedia.org/wiki/Maurice_Greene_(sprinter)',
          ref: 'Maurice Greene'
        },
        dob: new Date('1974-07-23T00:00:00.000Z'),
        nat: {
          img: 'https://media.aws.iaaf.org/Flags/USA.gif',
          text: 'USA'
        },
        pos: 1,
        venue: 'Athina (GRE)',
        date: new Date('1999-06-16T00:00:00.000Z'),
        results: 1280
      }
    ]
    localStorage.setItem('dataSource', JSON.stringify(this.data));
    localStorage.setItem('dataSourceColumns', JSON.stringify(this.columns));
  }
}
