a = [2, 1, 3, 5, 3, 2]


def first_duplicate(a)
  a.each do |value|
    return value.abs if a[value.abs - 1 ] < 0
    a[value.abs - 1] = -a[value.abs - 1]
  end
  -1
end

puts first_duplicate(a)