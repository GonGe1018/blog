export function formatDateToYYYYMMDD(date: Date): string {
	return date.toISOString().substring(0, 10);
}

export function formatDateWithTime(date: Date): string {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		timeZone: 'Asia/Seoul'
	};
	return date.toLocaleDateString('ko-KR', options);
}

export function formatDateTimeSimple(date: Date): string {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		timeZone: 'Asia/Seoul'
	};
	return date.toLocaleDateString('ko-KR', options).replace(/\./g, '-').replace(/\s/g, ' ');
}
