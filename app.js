class Car {
	constructor(name, color, hp) {
		this.name = name;
		this.color = color;
		this.hp = hp;
		this.body = `
			<div class="car-handle ${this.color}">
			<div class="car-top"></div>
			<div class="car-bottom"></div>
		</div>
			`;
	}

	build() {
		const handle = document.createElement("div");
		handle.innerHTML = this.body;
		handle.id = this.name;

		return handle;
	}

	move() {
		let el = document.querySelector("#" + this.name);
		el.style.position = "absolute";
		let counter = 0;
		let hp = this.hp;
		setInterval(function () {
			counter = counter + hp;
			el.style.left = counter + "px";
		}, 100);
	}
}

class Road {
	constructor() {}

	lane1(c) {
		const l = document.createElement("div");
		l.className = "lane1";
		l.appendChild(c.build());

		return l;
	}

	lane2(c) {
		const l = document.createElement("div");
		l.className = "lane2";
		l.appendChild(c.build());

		return l;
	}
}

const game_app = document.querySelector("#game_app");

const lexus = new Car("lexu", "blue", 10);
const jeep = new Car("jeep", "red", 4.1);

const road = new Road();
const lane1 = road.lane1(lexus);
const lane2 = road.lane2(jeep);

game_app.appendChild(lane1);
game_app.appendChild(lane2);

lexus.move();
jeep.move();
