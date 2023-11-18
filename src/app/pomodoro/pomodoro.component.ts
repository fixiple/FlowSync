import { Component } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent {
    /* see : https://stackoverflow.com/a/58915092
     and : https://stackoverflow.com/a/33508091
     and : https://stackoverflow.com/a/74751002
     for implementation strategies for the timer and the stop / resume functions
    */

    defaultTime: number = 600;
    time: number = this.defaultTime;
    display: string = 'Press start!';
    interval: any = null;
    setOwnTime: boolean = false;

    /* BUG: if user clicks multiple times in the play button, it will break the pause button
    therefore it will be impossible for the user to pause the timer again....

    Fixed: we clear the interval before setting a new interval (see 1st line in startTimer Function)
    link: https://stackoverflow.com/a/70268896
    */ 
    startTimer() {
        clearInterval(this.interval);
        this.display=this.transform(this.time);
        this.interval = setInterval(() => {
            if (this.time > 0) {
                this.time--;
                this.display=this.transform(this.time);
            } else {
                this.display="Time's UP!";
            }
        }, 1000);
    }
    
    transform(value: number): string {
        const minutes: number = Math.floor(value / 60);
        /*if the given value is 60,600 or 6000, we return the converted result BUT we add a 0 on the seconds 
        maybe check this for better solution?: https://stackoverflow.com/a/62238674
        */
        if (value==60||value==600||value==6000) return minutes + ':' + (value - minutes * 60 ) + '0';
        return minutes + ':' + (value - minutes * 60 );
    }

    pauseTimer() {
        clearInterval(this.interval);
    }

    resetTimer() {
        clearInterval(this.interval);
        this.display='Press start!';
        this.time=this.defaultTime;
    }

    customTimer(customTime : string) {
       /*we use the unary operator(+) to convert string to number
        link: https://stackoverflow.com/a/14668510
        */
        this.time=+customTime;
        clearInterval(this.interval);
        this.display=this.transform(this.time);
    }

    displayOwnTime(){
        this.setOwnTime=!this.setOwnTime;
    }
}
