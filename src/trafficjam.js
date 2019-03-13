class TrafficJam {
    constructor(queue) {
        this.queue = queue;
    }

    print() {
        let traffic = '';

        for (let i = 0; i < this.queue.length; i++) {
            switch(this.queue.charAt(i)) {
                case 'C': 
                    traffic += '/OO\\';
                    break;
                case 'B': 
                    traffic += '-/OOOO\\';
                    break;
                case 'P': 
                    traffic += '/O\\__';
                    break;
                case 'T': 
                    traffic += '/O|___';
                    break;
                case 'F': 
                    traffic += '/O|###';
                    break;
                default: break; 
            }

            if(i < this.queue.length - 1) {
                traffic += ' ';
            }
        }
        return traffic;
    }

    removeFirst() {
        this.queue = this.queue.substring(1);
    }

    removeLast() {
        this.queue = this.queue.substring(0, this.queue.length - 1);
    }

    fillCargo() {
        if(this.queue.indexOf('T') >= 0) {
            for(let i = 0; i < this.queue.length; i++) {
                if(this.queue.charAt(i) === 'T') {
                    this.queue = this.queue.substr(0, i) + 'F' + this.queue.substr(i + 1); 
                    break;
                }
            }
        } else {
            return false;
        } 
    }
}