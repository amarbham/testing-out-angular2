import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent {

  @Input() voteCount;
  @Input() myVote = 0;
  @Output() vote = new EventEmitter;

  incrementVote(count) {
    if (this.myVote === 1)
       return
    
    this.myVote++;
    this.vote.emit({myVote: this.myVote})
  }

  decrementVote(count) {
    if (this.myVote === -1)
        return

    this.myVote--;
    this.vote.emit({myVote: this.myVote})
  }
}
