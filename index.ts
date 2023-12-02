export class User {
	public helloWorld(name: string) {
		if (name) {
			console.log(name);
		}

		return {
			fullName: name,
		};
	}
}

const user = new User();

console.log(user.helloWorld('Master chief'));
