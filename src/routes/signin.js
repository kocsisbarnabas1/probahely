import supabase from '$lib/db';

export async function post({ request }) {
	const body = await request.json();
	let email = body.email;
	let password = body.password;

	const { session, error } = await supabase.auth.signIn({
		email: email,
		password: password
	});

	if (error) {
		return {
			status: error.status,
			body: error.message
		};
	}

	return {
		status: 200,
		body: 'success',
		headers: {
			'set-cookie': `session=${
				session.user.email
			}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${new Date(
				session.expires_at * 1000
			).toUTCString()};`
		}
	};
}
