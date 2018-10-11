# Write three functions that compute the sum of the numbers in a given list 
# using a for-loop, a while-loop, and recursion.
given = [1, 2, 3, 4]

def first_sum(numbers)
  total = 0
  numbers.each do |n|
    total += n
  end
  total
end

def second_sum(numbers)
  num_sum = 0
  while numbers.length >= 1
    num_sum += numbers[0]
    numbers.shift
  end
  num_sum
end

def third_sum(numbers)
  return 0 if numbers.empty?
  numbers[0] + third_sum(numbers[1..-1])
end


# puts first_sum(given)
puts second_sum(given)
# puts third_sum(given)