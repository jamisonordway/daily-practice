a = [2, 1, 3, 5, 3, 2]

# def first_duplicate(a)
#   a.each_with_object(Hash.new(0)) do |val, hash|
#     hash[val] += 1
#   end.each_with_object([]) do |(val, count), result|
#     if count > 1
#       result << val
#     end
#   end
# end

def first_duplicate(a)
  a.map do |char|
    [char, a.count(char)]
  end.drop_while do |i|
    i[1] < 1
  end.first[0]
end
puts first_duplicate(a)