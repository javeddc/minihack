require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'manning'
}

ActiveRecord::Base.establish_connection(options)
