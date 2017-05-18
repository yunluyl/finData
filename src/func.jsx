'use strict';

import fetch from 'whatwg-fetch';

export const apiReq = (method, url, data) =>
{
	return new Promise((resolve, reject) =>
	{
		const request =
		{
			method : method,
			credentials : 'same-origin',
			cache : 'no-cache',
			headers :
			{
				'Content-Type' : 'application/json'
			},
			body : JSON.stringify(data)
		};
		fetch(url, request)
		.then((response) =>
		{
			if (response.status == 200)
			{
				return response.json();
			}
			else
			{
				console.log("API response status: " + response.status);
				reject();
			}
		})
		.then((json) =>
		{
			resolve(json);
		})
		.catch((err) =>
		{
			console.log(err.message);
			reject();
		});
	});
}