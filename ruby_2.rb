# Write a function that can take any non-negative integer as a argument and return it in the opposite order.
# Assume your interviewer tells you that using any built-in Ruby methods that makes this insanely easy is not cool.

def reverse_integer(given)
  split_given = given.to_s.split('')
  reversed = []
  split_given.length.times { reversed << split_given.pop }
  reversed.join.to_i
end

puts reverse_integer(1777774)
puts reverse_integer(12345)
puts reverse_integer(5564791324)