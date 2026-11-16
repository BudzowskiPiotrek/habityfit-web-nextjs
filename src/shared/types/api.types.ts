export interface ApiResponseDto<T> {
  result: T | null;
  withError: boolean;
  statusCode: number;
  message: string;
}
