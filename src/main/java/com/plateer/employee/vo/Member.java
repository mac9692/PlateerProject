package com.plateer.employee.vo;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Member {
    private Integer memberId;
    private String email;
    private String password;
    private String name;
    private String birthDate;
    private String gender;
    private String phoneNumber;
    private String address;
    private String authority;
    private LocalDateTime registerDate;
    private LocalDateTime updateDate;
}
