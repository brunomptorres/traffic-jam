describe("A traffic jam", function () {
    it("can consist of cars and a bus", function () {
                   var queue = "CCB",
                                   trafficJam = new TrafficJam(queue),
                                   trafficResult;
                                  
                   trafficResult = trafficJam.print();
                  
                   expect(trafficResult).toBe("/OO\\ /OO\\ -/OOOO\\");
    });

    it("can consist of cars, a pickup and a bus", function () {
                   var queue = "CPCB",
                                   trafficJam = new TrafficJam(queue),
                                   trafficResult;

                   trafficResult = trafficJam.print();

                   expect(trafficResult).toEqual("/OO\\ /O\\__ /OO\\ -/OOOO\\");
    });

    it("can be modified", function () {
                   var queue = "CPCBC",
                                   trafficJam = new TrafficJam(queue),
                                   trafficResult;

                   trafficJam.removeFirst();
                   trafficResult = trafficJam.print();
                   expect(trafficResult).toEqual("/O\\__ /OO\\ -/OOOO\\ /OO\\");

                   trafficJam.removeLast();
                   trafficResult = trafficJam.print();
                   expect(trafficResult).toEqual("/O\\__ /OO\\ -/OOOO\\");
    });

    it("can consist of trucks", function () {
                   var queue = "TTT",
                                   trafficJam = new TrafficJam(queue),
                                   trafficResult;

                   trafficResult = trafficJam.print();
                   expect(trafficResult).toEqual("/O|___ /O|___ /O|___");

                   trafficJam.fillCargo();
                   trafficResult = trafficJam.print();
                   expect(trafficResult).toEqual("/O|### /O|___ /O|___");

                   trafficJam.fillCargo();
                   trafficResult = trafficJam.print();
                   expect(trafficResult).toEqual("/O|### /O|### /O|___");

                   trafficJam.fillCargo();
                   trafficResult = trafficJam.print();
                   expect(trafficResult).toEqual("/O|### /O|### /O|###");

                   expect(trafficJam.fillCargo()).toBe(false);
    });
});