variable "environment" {
  description = "Name of the deployment environment."
  type        = string
}

variable "environment_subdomain" {
  description = "Subdomain for websites in this environment ('www' for prod, 'dev' for dev, etc)."
  type        = string
}

variable "build_id" {
  description = "The id of the build in S3 (the zipped dist)"
  type        = string
}

variable "cert_arn" {
  description = "The id of the build in S3 (the zipped dist)"
  type        = string
}